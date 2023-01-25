<template>
    <div>
        <section class="mt-4">
            <div class="card">

                <div class="card-header text-center">

                    <div class="row">
                    
                        <div class="col-md-2 text-left">
                            <small>Algorithm: </small>
                        </div>

                        <AlgorithmField v-model="form.algorithm" @change="clearFields" @flag="checkFlag" />

                        <div class="col-md-6">
                            <h4>Hash generator</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="clearForm">Reset</div>
                        </div>
                    
                    </div>

                    <div class="row">
                        <InstructionBlock type="hash"/>
                    </div>
                </div>

                <div class="card-body">
                    <DataField v-model="form.input" @keyup="sendToConvert" />
                    <SaltField v-model="form.salt" @keyup="sendToConvert" :disableSalt="form.password_algorithm_flag"/>
                    <HashField :hashed="form.hash" />
                </div>
                
                <div class="card-footer text-muted text-right">
                    <div class="row">
                        <div class="col-md-2 text-left">
                            <small>Present algorithm:</small>
                        </div>
                        <div class="col-md-10 text-left">
                            <div v-if="form.algorithm">
                                <small class="text-info font-weight-bold">
                                    {{ form.algorithm }}
                                </small>
                                
                                <small v-if="form.input"> 
                                    [length: <b>{{ calculateHashLength() }}</b> characters]
                                </small>

                                <small v-if="form.password_algorithm_flag"> 
                                    [salt is aready included in the hash]
                                </small>
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
import AlgorithmField from '../fields/AlgorithmField.vue'
import HashField from '../fields/HashField.vue'
import SaltField from '../fields/SaltField.vue'
import DataField from '../fields/DataField.vue'
import InstructionBlock from '../fields/InstructionBlock.vue'

export default {
    name: 'hash',
    components: {
        AlgorithmField,
        HashField,
        SaltField,
        DataField,
        InstructionBlock
    },
    data() {
        return {
            form: {
                algorithm: null,
                input: '',
                salt: '',
                hash: '',
                password_algorithm_flag: '',
                options: {
                    bcrypt: {
                        cost: ''
                    },
                    argon: {
                        memory_cost: '',
                        time_cost: '',
                        threads: ''
                    }
                }
            }
        }
    },
    methods: {
        sendToConvert() {
            axios.post('hash/convert', 
            {
                algorithm: this.form.algorithm,
                input: this.form.input,
                salt: this.form.salt,
                options: this.form.options
            })
            .then((response) => {
                this.form.hash = response.data.result
            })
        },
        clearForm() {
            this.form.algorithm = null;
            this.form.password_algorithm_flag = '';
            this.clearFields()
        },
        clearFields() {
            this.form.input = '';
            this.form.hash = '';
            this.form.salt = '';
        },
        calculateHashLength() {
            if (this.form.hash.length > 0) {
                return this.form.hash.length
            }
        },
        checkFlag(e) {
            this.form.password_algorithm_flag = e;
        }
    }
}
</script>