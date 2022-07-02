<template>
    <div>
        <section class="mt-4">
            <div class="card">

                <div class="card-header text-center">

                    <div class="row">
                        <div class="col">
                            <h4>AES Encryption / Decryption Demo</h4>
                        </div>
                    </div>
                </div>

                <div class="card-body p-0">
                    <div class="row">
                    
                        <div class="col-md-6 pr-0">
                            <div class="card">
                                <div class="card-header">
                                    Encryption
                                </div>
                                <div class="card-body">
                                    <EncryptMessageField v-model="encrypt.form.message"/>
                                    <EncryptModeField v-model="encrypt.form.mode"/>
                                    <EncryptKeySizeField v-model="encrypt.form.keysize"/>
                                    <EncryptFormatField v-model="encrypt.form.format"/>
                                    <EncryptKeyField v-model="encrypt.form.key"/>
                                    <EncryptSubmitField @click="submit"/>
                                    <EncryptOutputField v-model="encrypt.output"/>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 pl-0">
                            <div class="card">
                                <div class="card-header">
                                    Decryption
                                </div>
                                <div class="card-body">
                                    
                                </div>
                            </div>
                        </div>

                    </div>  
                </div>
                
                <div class="card-footer text-muted text-right">
                    <div class="row">
                        <div class="col-md-2 text-left">
                            <small>Crypting scenario:</small>
                        </div>
                        <div class="col-md-10 text-left">
                            <small class="text-danger">text / file</small>
                            <small class=""> mode</small>
                            <small class=""> key size</small>
                            <small class=""> key</small>
                            <small class=""> output format</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import EncryptMessageField from '../fields/crypt/EncryptMessageField.vue'
import EncryptModeField from '../fields/crypt/EncryptModeField.vue'
import EncryptKeySizeField from '../fields/crypt/EncryptKeySizeField.vue'
import EncryptFormatField from '../fields/crypt/EncryptFormatField.vue'
import EncryptKeyField from '../fields/crypt/EncryptKeyField.vue'
import EncryptOutputField from '../fields/crypt/EncryptOutputField.vue'
import EncryptSubmitField from '../fields/crypt/EncryptSubmitField.vue'

export default {
     name: 'CryptDemo',
     components: {
        EncryptMessageField,
        EncryptModeField,
        EncryptKeySizeField,
        EncryptFormatField,
        EncryptKeyField,
        EncryptOutputField,
        EncryptSubmitField
    },
    data() {
        return {
            encrypt: {
                form: {
                    message: null,
                    mode: null,
                    keysize: null,
                    format: null,
                    key: null,
                },
                output: null
            },
            decrypt: {
                form: {
                    
                }
                // output: null
            }
            
        }
    },
    methods: {
        submit() {
            axios.post('crypt/encrypt', 
            {
                message: this.encrypt.form.message,
                mode: this.encrypt.form.mode,
                keysize: this.encrypt.form.keysize,
                format: this.encrypt.form.format,
                key: this.encrypt.form.key,
            })
            .then((response) => {
                this.encrypt.output = response.data.result
            })  
        }
    }
        
}

</script>