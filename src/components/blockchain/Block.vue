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
                    'bg-success': form.validateSuccess,
                    'bg-error': form.validateFail,
                    '': form.validateEmpty
                    }">
                    <BlockIdField v-model="form.blockId" @keyup="sendToConvert"/>
                    <NonceField v-model="form.nonce" />
                    <DataField v-model="form.input" @keyup="sendToConvert" />
                    <HashStartField v-model="form.hashStart" @keyup="sendToConvert"/>
                    <HashField :hashed="form.hash" type="block"/>
                </div>

            
                <div class="card-footer text-muted text-left">
                    <MineButton @click="mine" />
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

export default {
    name: 'block',
    components: {
        DataField,
        HashField,
        HashStartField,
        NonceField,
        BlockIdField,
        MineButton,
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
            }
        }
    },
    mounted() {
        this.form.blockId = '1'
        this.form.nonce = '0'
        this.sendToConvert()
        this.validateBlock()
    },
    methods: {
        mine() {
            this.form.nonce = '0'
            this.form.hashStart  = this.form.hashStart ? this.form.hashStart : '00'
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
        },
        clearForm() {
            this.form.input = '';
            this.form.nonce = '';
            this.form.hash = '';
            this.form.hashStart = '';
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
        }
    },
    
}
</script>

<style>
    .bg-error {
        background-color: pink;
    }
    .bg-success {
        background-color: aquamarine;
    }
</style>