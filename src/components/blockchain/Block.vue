<template>
    <div>
        <section class="mt-4">
            <div class="card">
                <div class="card-header text-center">
                    <div class="row">
                        <div class="col-md-2 text-left">
                            <small>Algorithm: </small>
                        </div>

                        <div class="col-md-2 text-left">
                            <small>{{ form.algorithm }}</small>
                        </div>

                        <div class="col-md-6">
                            <h4>Block visualization</h4>
                        </div>

                        <div class="col-md-2">
                            <div 
                            class="btn btn-secondary btn-sm d-block" 
                            @click="clearForm"
                            >
                            Reset
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <InstructionBlock type="block"/>
                    </div>
                </div>

                <div class="card-body" :class="{ 
                    'bg-success-block': form.validateSuccess,
                    'bg-error-block': form.validateFail,
                    '': form.validateEmpty
                    }">
                    <BlockIdField v-model="form.blockId" @keyup="sendToConvert"/>
                    <NonceField v-model="form.nonce" />
                    <DataField v-model="form.input" @keyup="sendToConvert" />
                    <HashStartField v-model="form.hashStart" @keyup="sendToConvert"/>
                    <HashField :hashed="form.hash" type="block"/>
                </div>

                <div class="card-footer text-muted text-left">
                    <div class="row">
                        <div class="col-md-4 offset-md-2">
                            <MineButton @click="mine" />
                        </div>
                        <div class="col-md-6">
                            <MineTime :timeElapsed="mineDuration" :mineFinished="mineFinished"/>
                        </div>
                    </div>
                    
                    <div v-if="loading" class="spinner-overlay">
                        <div class="custom-spinner">
                            <svg :viewBox="`0 0 ${spinnerSize} ${spinnerSize}`">
                                <circle class="circle-bg"/>
                                <circle class="circle-fg"/>
                            </svg>
                            <div class="timer">{{ seconds }}.{{ milliseconds }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import DataField from '../fields/DataField.vue'
import HashField from '../fields/HashField.vue'
import HashStartField from '../fields/HashStartField.vue'
import NonceField from '../fields/NonceField.vue'
import BlockIdField from '../fields/BlockIdField.vue'
import MineButton from '../fields/MineButton.vue'
import InstructionBlock from '../fields/InstructionBlock.vue'
import MineTime from '../fields/MineTime.vue'

export default {
    name: 'block',
    components: {
        DataField,
        HashField,
        HashStartField,
        NonceField,
        BlockIdField,
        MineButton,
        MineTime,
        InstructionBlock
    },
    data(){
        return {
            form: {
                algorithm: 'sha256',
                blockId: null,
                nonce: '',
                input: '',
                hash: '',
                hashStart: '00',
                validateSuccess: false,
                validateFail: false,
                validateEmpty: false
            },
            loading: false,
            timer: null,
            milliseconds: 0,
            seconds: 0,
            mineStartTime: 0,
            mineDuration: 0,
            mineFinished: false,
            spinnerSize: 500,
        }
    },
    mounted() {
        this.form.blockId = '1';
        this.form.nonce = '0';
        this.sendToConvert();
        this.validateBlock();
        document.documentElement.style.setProperty('--spinner-size', this.spinnerSize + 'px');
    },
    methods: {
        mine() {
            this.mineStartTime = performance.now();
            this.loading = true;
            this.startTimer();
            this.form.nonce = '0';
            this.form.hashStart  = this.form.hashStart ? this.form.hashStart : '00';
            this.mineFinished = false;
            this.mineDuration = 0;

            axios.post('block/mine', 
            {
                algorithm: this.form.algorithm,
                blockId: this.form.blockId,
                nonce: this.form.nonce,
                data: this.form.input,
                hash: this.form.hash,
                hashStart: this.form.hashStart,
            })
            .then((response) => {
                this.form.nonce = response.data.result.nonce
                this.form.hash = response.data.result.hash
                this.validateBlock()
            })
            .finally(() => {
                this.mineDuration = performance.now() - this.mineStartTime;
                this.loading = false;
                this.stopTimer();
                this.mineFinished = true;
            })
        },
        clearForm() {
            this.form.input = '';
            this.form.nonce = '';
            this.form.hash = '';
            this.form.hashStart = '';
            this.mineDuration = 0;
            this.validateBlock();
        },
        validateBlock() {
            if (this.form.hashStart == '') {
                this.form.validateSuccess = false
                this.form.validateEmpty = true
                this.form.validateFail = false
                return
            } 
            if (this.form.hash.startsWith(this.form.hashStart)) {
                this.form.validateSuccess = true
                this.form.validateEmpty = false
                this.form.validateFail = false
                return
            } 
            if (!this.form.hash.startsWith(this.form.hashStart)) {
                this.form.validateSuccess = false
                this.form.validateEmpty = false
                this.form.validateFail = true
                return
            }
        },
        sendToConvert() {
            axios.post('hash/convert', 
            {
                algorithm: this.form.algorithm,
                input: this.form.blockId + this.form.nonce + this.form.input,
            })
            .then((response) => {
                this.form.hash = response.data.result
                this.validateBlock()
            })
        },
        startTimer() {
            const start = performance.now()
            this.timer = setInterval(() => {
                const elapsed = performance.now() - start
                this.seconds = Math.floor(elapsed / 1000)
                this.milliseconds = String(Math.floor(elapsed % 1000)).padStart(3,'0')
            }, 1)
        },
        stopTimer() {
            clearInterval(this.timer);
            this.mineDuration = performance.now() - this.mineStartTime;
            console.log('Czas requestu mine (ms):', this.mineDuration)
        },
    },
}
</script>

<style>
    .bg-error-block {
        background-color: pink;
    }
    .bg-success-block {
        background-color: rgb(172, 245, 220);
    }

    :root {
        --spinner-size: 0px; 
        --spinner-radius: calc(var(--spinner-size) / 2 - 10px); 
        --dash-array: calc(2 * 3.1416 * var(--spinner-radius));
    }

    .spinner-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255,255,255,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .custom-spinner {
        position: relative;
        width: var(--spinner-size);
        height: var(--spinner-size);
    }

    .custom-spinner svg {
        width: var(--spinner-size);
        height: var(--spinner-size);
        transform-origin: 50% 50%;
        animation: spin 1s linear infinite;
    }

    .custom-spinner .circle-bg,
    .custom-spinner .circle-fg {
        fill: white;
        cx: calc(var(--spinner-size) / 2);
        cy: calc(var(--spinner-size) / 2);
        r: var(--spinner-radius);
    }

    .custom-spinner .circle-bg {
        stroke: #eee;
        stroke-width: 10;
    }

    .custom-spinner .circle-fg {
        stroke: #007bff;
        stroke-width: 10;
        stroke-linecap: round;
        stroke-dasharray: var(--dash-array);
        stroke-dashoffset: var(--dash-array);
        animation: dash 1.5s ease-in-out infinite;
    }

    .custom-spinner .timer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: calc(var(--spinner-size) / 10);
        font-weight: bold;
    }

    @keyframes spin {
        100% { transform: rotate(360deg); }
    }

    @keyframes dash {
        0% { stroke-dashoffset: var(--dash-array); }
        50% { stroke-dashoffset: calc(var(--dash-array) / 4); }
        100% { stroke-dashoffset: var(--dash-array); }
    }
</style>