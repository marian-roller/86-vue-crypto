<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">
                <div>Private key:</div>
            </div>
        </div>
        <div class="col-md-8">
            <textarea 
            id="private-key"
            class="form-control" 
            rows="10" 
            :value="form.privateKey"
            ></textarea>
        </div>
        <div class="col-md-2">
            <KeysButton @click="generatePrivateKey"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import KeysButton from './KeysButton.vue'
export default {
    name: 'PrivateKeyField',
    props: {
        privateKey: String
    },
    components: {
        KeysButton
    },
    data(){
        return {
            form: {
                privateKey: ''
            }
        }
    },
    methods: {
        ...mapActions({
                publicKey: 'keys/publicKey'
            }),
        generatePrivateKey() {
            axios.post('key/get-keys', 
            {})
            .then((response) => {
                this.form.privateKey = response.data.result.private_key
                this.publicKey(response.data.result.public_key)
            })
        }
    }
}
</script>