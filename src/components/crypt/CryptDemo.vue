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
                                    <div class="row">
                                        <div class="col-md-10 offset-md-2 font-weight-bold">Encryption</div>
                                    </div>
                                </div>
                                
                                <div class="card-body">
                                    <!-- TODO FIX some labels -->

                                    <EncryptMessageField v-model="encrypt.form.message"/>
                                    <EncryptModeField v-model="encrypt.form.mode"/>
                                    <EncryptKeySizeField v-model="encrypt.form.keysize"/>
                                    <EncryptFormatField v-model="encrypt.form.format"/>
                                    <EncryptKeyField v-model="encrypt.form.key"/>
                                    <EncryptSubmitField @click="submit" :sumbitprefix="encrypt.button_text"/>
                                    <EncryptOutputField v-model="encrypt.output"/>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 pl-0">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-10 offset-md-2 font-weight-bold">Decryption</div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <EncryptMessageField v-model="decrypt.form.message"/>
                                    <EncryptModeField v-model="decrypt.form.mode"/>
                                    <EncryptKeySizeField v-model="decrypt.form.keysize"/>
                                    <EncryptFormatField v-model="decrypt.form.format"/>
                                    <EncryptKeyField v-model="decrypt.form.key"/>
                                    <EncryptSubmitField @click="submit" :sumbitprefix="decrypt.button_text"/>
                                    <EncryptOutputField v-model="decrypt.output"/>
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
                output: null,
                button_text: 'Encrypt'
            },
            decrypt: {
                form: {
                    message: null,
                    mode: null,
                    keysize: null,
                    format: null,
                    key: null,
                },
                output: null,
                button_text: 'Decrypt'
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