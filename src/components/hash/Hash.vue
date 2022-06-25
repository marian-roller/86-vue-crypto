<template>
    <div>
        <section class="mt-4">
            <div class="card">


                <div class="card-header text-center">

                    <div class="row">
                    
                        <div class="col-md-2 text-left">
                            <small>Algorithm: </small>
                        </div>

                        <algorithms :chooseAlgorithm="setAlgorithm" />

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
                            <div class="font-weight-bold">salt:</div>
                        </div>
                        <div class="col-md-10">
                            <input 
                            id="salt"
                            type="text"
                            class="form-control" 
                            v-model="form.salt"
                            @keyup="sendToConvert"
                            >
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
import algorithms from './Algorithms.vue'
export default {
    name: 'hash',
    components: {
        algorithms
    },
    data() {
        return {
            form: {
                algorithm: null,
                input: '',
                salt: '',
                hash: ''
            }
        }
    },
    methods: {
        sendToConvert() {
            axios.post('hash/convert', 
            {
                algorithm: this.form.algorithm,
                input: this.form.input,
                salt: this.form.salt
            })
            .then((response) => {
                this.form.hash = response.data.result
            })
        },
        clearForm(event) {
            this.form.algorithm = null;
            this.form.input = '';
            this.form.hash = '';
            this.form.salt = '';
        },
        setAlgorithm(algorithm) {
            this.form.algorithm = algorithm
        }
    }
}
</script>