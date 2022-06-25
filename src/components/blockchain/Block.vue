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



                    <div class="row">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Block:</div>
                        </div>
                        <div class="col-md-10">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">#</div>
                                </div>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="block"
                                v-model="form.blockId"
                                @keyup="validateBlock"
                                >
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Nonce:</div>
                        </div>
                        <div class="col-md-10">
                            <input 
                            id="nonce"
                            type="text"
                            class="form-control" 
                            v-model="form.nonce"
                            @keyup="validateBlock"
                            >
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Data:</div>
                        </div>
                        <div class="col-md-10">
                            <textarea 
                            id="input"
                            class="form-control" 
                            rows="6" 
                            v-model="form.input"
                            @keyup="validateBlock"
                            ></textarea>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Hash:</div>
                        </div>
                        <div class="col-md-10">
                            <input 
                            id="hash"
                            type="text"
                            class="form-control" 
                            readonly
                            v-model="form.hash"
                            >
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted text-left">
                    <div class="row">
                        <div class="col-md-2 offset-md-2">
                            <div 
                            class="btn btn-secondary btn-sm"
                            @click="mine"
                            >
                            Mine
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'block',
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
        // set block id
        // mine
    },
    methods: {
        mine() {
            // axios to mine
            // populate nonce field, hash field
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