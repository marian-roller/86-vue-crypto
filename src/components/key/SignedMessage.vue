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
                            <small>Test</small>
                        </div>

                        <div class="col-md-6">
                            <h4>Signed message</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="clearForm">Reset</div>
                        </div>
                    
                    </div>

                    <div class="row">
                        <InstructionBlock type="signed-message"/>
                    </div>
                </div>

                <div class="card-body p-0">
                    <div class="row">
                    
                        <div class="col-md-6 pr-md-0">
                            <div class="card h-100">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-10 offset-md-2 font-weight-bold">
                                        Sign and send
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-body">
                                    <MessageField v-model="form.raw_message" />
                                    <div class="row my-3">
                                        <div class="col-md-10 offset-md-2">
                                            <KeysButton @click="generatePrivateKey"/>
                                        </div>
                                    </div>
                                    
                                    <PublicKeyField from="signedMessage" :display="true" />     
                                    <SignatureButton @click="signMessage" />
                                    <SignatureField :signature="form.signature" :display="true" />
                                    <SendMessageButton @click="sendMessage"/>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 pl-md-0">
                            <div class="card h-100">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-10 offset-md-2 font-weight-bold">
                                        Receive and verify
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">

                                    <MessageField v-model="form.sent_message" />
                                    <PublicKeyField from="signedMessage" :display="form.display"/> 
                                    <SignatureField :signature="form.signature" :display="form.display" />
                                    <VerifyMessageButton />
            
                                </div>
                            </div>
                        </div>

                    </div>  
                </div>

                <div class="card-footer text-muted text-left small p-0">
                    <div class="row m-0">
                        <div class="col-md-6 p-3 border">
                            message stutus
                            (message: ?, keys: ?, signed with public key: ?, sent (message, public key and signature: ?))
                        </div>
                        <div class="col-md-6 p-3 border">
                            message status
                            (received: ?, verified: ?, verification status: sender and integrity confirmed / sender and/or integrity failed)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import InstructionBlock from '../fields/InstructionBlock.vue'
import PublicKeyField from '../fields/PublicKeyField.vue'
import KeysButton from '../fields/KeysButton.vue'
import SignatureButton from '../fields/SignatureButton.vue'
import SendMessageButton from '../fields/SendMessageButton.vue'
import SignatureField from '../fields/SignatureField.vue'
import MessageField from '../fields/MessageField.vue'
import VerifyMessageButton from '../fields/VerifyMessageButton.vue'
export default {
    name: 'SignedMessage',
    components: {
        InstructionBlock,
        PublicKeyField,
        KeysButton,
        SignatureButton,
        SendMessageButton,
        SignatureField,
        MessageField,
        VerifyMessageButton
    },
    data() {
        return {
            form: {
                raw_message: '',
                sent_message: '',
                signature: '',
                display: false
            }
        }
    },
    methods: {
        clearForm() {
            this.publicKey(null)
            this.privateKey(null)
            this.form.raw_message = ''
            this.form.signature = ''
        },
        ...mapGetters({
            privateKeyGet: 'keys/privateKey',
            publicKeyGet: 'keys/publicKey',
        }),
        ...mapActions({
            publicKey: 'keys/publicKey',
            privateKey: 'keys/privateKey',
        }),
        generatePrivateKey() {
            axios.post('key/get-keys', {})
            .then((response) => {
                this.publicKey(response.data.result.public_key)
                this.privateKey(response.data.result.private_key)
            })
        },
        signMessage() {
            axios.post('key/sign-message', 
            {
                message: this.form.raw_message,
                private_key: this.privateKeyGet(),
            })
            .then((response) => {
                this.form.signature = response.data.result.signature
            })
        },
        sendMessage() {
            this.form.display = true;
            this.form.sent_message = this.form.raw_message;
        }
    }
}
</script>