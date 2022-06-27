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
                            <small>sha256</small>
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
                </div>

                <div class="card-body">
                    <BlockIdField v-model="form.blockId" @keyup="validateBlock"/>
                    <NonceField v-model="form.nonce" @keyup="validateBlock"/>
                    <DataField v-model="form.input" @keyup="sendToConvert" />
                    <HashField :hashed="form.hash" />
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
import NonceField from '../fields/NonceField.vue'
import BlockIdField from '../fields/BlockIdField.vue'
import MineButton from '../fields/MineButton.vue'

export default {
    name: 'block',
    components: {
        DataField,
        HashField,
        NonceField,
        BlockIdField,
        MineButton
    },
    data(){
        return {
            form: {
                algorithm: 'sha256',
                blockId: null,
                nonce: '',
                input: '',
                hash: ''
            }
        }
    },
    mounted() {
        this.form.blockId = '1'
        this.form.nonce = '1'
        // mine
    },
    methods: {
        mine() {
            console.log('mine')

            axios.post('block/mine', 
            {
                algorithm: this.form.algorithm,
                blockId: this.form.blockId,
                nonce: this.form.nonce,
                data: this.form.input,
                hash: this.form.hash,
            })
            .then((response) => {
                console.log(response.data)
                this.form.nonce = response.data.result.nonce
                this.form.hash = response.data.result.hash
            })
        },
        clearForm() {
            this.form.input = '';
            this.form.nonce = '';
            this.form.hash = '';
        },
        validateBlock() {
            // set background color
            this.sendToConvert()
        },
        sendToConvert() {
            axios.post('hash/convert', 
            {
                algorithm: this.form.algorithm,
                input: this.form.blockId + this.form.nonce + this.form.input,
            })
            .then((response) => {
                this.form.hash = response.data.result
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