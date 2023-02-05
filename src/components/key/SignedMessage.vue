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
                    
                        <div class="col-md-6 pr-0">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-10 offset-md-2 font-weight-bold">
                                        Sign and send
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-body">
                                    <MessageField @keyup="sendToConvert" />
                                    <div class="row my-3">
                                        <div class="col-md-10 offset-md-2">
                                            <KeysButton @click="generatePrivateKey"/>
                                        </div>
                                    </div>
                                    
                                    <PublicKeyField from="signedMessage"/>     
                                    <SignatureButton />
                                    <SignatureField />
                                    <SendMessageButton />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 pl-0">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-10 offset-md-2 font-weight-bold">
                                        Receive and verify
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    Message field - field
                                    public key - field
                                    signature - field
                                    verify - button
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
import { mapActions } from 'vuex'
import InstructionBlock from '../fields/InstructionBlock.vue'
import PublicKeyField from '../fields/PublicKeyField.vue'
import KeysButton from '../fields/KeysButton.vue'
import SignatureButton from '../fields/SignatureButton.vue'
import SendMessageButton from '../fields/SendMessageButton.vue'
import SignatureField from '../fields/SignatureField.vue'
import MessageField from '../fields/MessageField.vue'
export default {
    name: 'SignedMessage',
    components: {
        InstructionBlock,
        PublicKeyField,
        KeysButton,
        SignatureButton,
        SendMessageButton,
        SignatureField,
        MessageField
    },
    methods: {
        clearForm() {

        },
        ...mapActions({
            publicKey: 'keys/publicKey',
            privateKey: 'keys/privateKey',
        }),
        generatePrivateKey() {
            axios.post('key/get-keys', 
            {})
            .then((response) => {
                this.publicKey(response.data.result.public_key)
                this.privateKey(response.data.result.private_key)
            })
        },
        sendToConvert() {

        }

    }
}
</script>