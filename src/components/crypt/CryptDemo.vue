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
                                    <EncryptMessageField />
                                    <EncryptModeField v-model="encrypt.form.mode"/>
                                    <EncryptKeySizeField v-model="encrypt.form.keysize"/>
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
import EncryptMessageField from '../fields/crypt/EncryptMessageField.vue'
import EncryptModeField from '../fields/crypt/EncryptModeField.vue'
import EncryptKeySizeField from '../fields/crypt/EncryptKeySizeField.vue'

export default {
     name: 'CryptDemo',
     components: {
        EncryptMessageField,
        EncryptModeField,
        EncryptKeySizeField
    },
    data() {
        return {
            encrypt: {
                form: {
                    mode: null,
                    keysize: null
                }
            },
            decrypt: {
                form: {
                    output: null
                }
            }
            
        }
    }
        
}

</script>