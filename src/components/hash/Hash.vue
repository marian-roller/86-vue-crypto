<template>
    <div>
        <section class="mt-4">
            <div class="card">

                <div class="card-header text-center">

                    <div class="row">
                    
                        <div class="col-md-2 text-left">
                            <small>Algorithm: </small>
                        </div>

                        <AlgorithmField v-model="form.algorithm" @change="clearFields" />

                        <div class="col-md-6">
                            <h4>Hash generator</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="clearForm">Reset</div>
                        </div>
                    
                    </div>
                </div>

                <div class="card-body">
                    <DataField v-model="form.input" @keyup="sendToConvert" />
                    <SaltField v-model="form.salt" @keyup="sendToConvert" />
                    <HashField :hashed="form.hash" />
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
import AlgorithmField from '../fields/AlgorithmField.vue'
import HashField from '../fields/HashField.vue'
import SaltField from '../fields/SaltField.vue'
import DataField from '../fields/DataField.vue'

export default {
    name: 'hash',
    components: {
    AlgorithmField,
    HashField,
    SaltField,
    DataField
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
        clearForm() {
            this.form.algorithm = null;
            this.clearFields()
        },
        clearFields() {
            this.form.input = '';
            this.form.hash = '';
            this.form.salt = '';
        }
    }
}
</script>