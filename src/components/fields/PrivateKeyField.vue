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
            :rows="this.form.rows" 
            :value="privateKeyGet()"
            ></textarea>
        </div>
        <div class="col-md-2">
            <KeysButton @click="generatePrivateKey"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import KeysButton from './KeysButton.vue'
export default {
    name: 'PrivateKeyField',
    components: {
        KeysButton
    },
    data(){
        return {
            form: {
                rows: null
            }
        }
    },
    mounted() {
        this.form.rows = 2
    }, 
    updated() {
        this.checkRows();
    },
    methods: {
        ...mapGetters({
            privateKeyGet: 'keys/privateKey',
        }),
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
        checkRows() {
            if (this.privateKeyGet()) {
                this.form.rows = 29
            } else {
                this.form.rows = 2
            }
        }
    }
}
</script>

<style>
    #private-key {
        font-size: 0.75rem !important;
    }
</style>