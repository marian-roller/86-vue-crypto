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
                            <h4>Private / Public keys generator</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="clearForm">Reset</div>
                        </div>
                    
                    </div>

                    <div class="row">
                        <InstructionBlock type="public-key"/>
                    </div>
                </div>

                <div class="card-body">
                    <PrivateKeyField />
                    <PublicKeyField />     
                </div>
            </div>
        </section>
        <h1>Public Key</h1>
        <div>simple, verifying, signed transactions</div>

        <div>generate private key</div>
        <div>generate public key</div>

        <div>file and public key access to open</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import PrivateKeyField from '../fields/PrivateKeyField.vue'
import PublicKeyField from '../fields/PublicKeyField.vue'
import InstructionBlock from '../fields/InstructionBlock.vue'
export default {
    name: 'PublicKey',
    components: {
        PrivateKeyField,
        PublicKeyField,
        InstructionBlock
    },
    data() {
        return {
            form: {
                algorithm: 'test'
            }
        }
    },
    methods: {
        ...mapActions({
            publicKey: 'keys/publicKey'
        }),
        clearForm() {
            this.publicKey(null)
        }
    }
}

</script>