<template>
    <div>
        <section class="mt-4">
            <div class="card">


                <div class="card-header text-center">

                    <div class="row">

                        <div class="col-md-2 text-left">
                            <small>Algorithm: </small>
                        </div>

                        <div class="col-md-2">
                            <select id="algorithm" class="form-control form-control-sm" v-model="form.algorithm">
                                <option :value="null" disabled selected>Choose...</option>
                                <option v-for="item in this.algorithms" :value="item">{{item}}</option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <h4>Hash generator</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="clearForm">Reset</div>
                        </div>
                    
                    </div>
                </div>






                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="font-weight-bold">data:</div>
                        </div>
                        <div class="col-md-10">
                            <textarea 
                            id="input"
                            class="form-control" 
                            rows="6" 
                            v-model="form.input"
                            @keyup="sendToConvert"
                            ></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">hash:</div>
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
                <div class="card-footer text-muted text-right">
                    <div class="row">
                        <div class="col-md-2 text-left">
                            <small>Present algorithm:</small>
                        </div>
                        <div class="col-md-10 text-left">
                            <small class="text-danger">{{ form.algorithm }}</small>
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
    name: 'hash',
    data() {
        return {
            form: {
                algorithm: null,
                input: null,
                salt: null,
                hashed: null,
                hash: null
            },
            algorithms: {
                md5: 'md5',
                sha1: 'sha1',
            }
        }
    },
    methods: {
        sendToConvert() {
            axios.post('hash/convert', 
            {
                algorithm: 'md5',
                input: this.form.input,
                // salt: this.form.salt
            })
            .then((response) => {
                this.form.hash = response.data.result
            })
        },
        clearForm(event) {
            this.form.algorithm = null;
            this.form.input = null;
            this.form.hash = null;
        }
    }
}
</script>