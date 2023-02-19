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
                    <PublicKeyField from="publiKey" :display="form.display"/>     
                </div>
            </div>
        </section>
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
                algorithm: 'sha256',
                display: true
            }
        }
    },
    methods: {
        ...mapActions({
            publicKey: 'keys/publicKey',
            privateKey: 'keys/privateKey'
        }),
        clearForm() {
            this.publicKey(null)
            this.privateKey(null)
        }
    }
}

</script>