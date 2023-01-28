<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">
                <div>Public key:</div>
            </div>
        </div>
        <div class="col-md-8">
            <textarea 
            id="public-key"
            class="form-control" 
            rows="6" 
            :value="form.publicKey"
            ></textarea>
        </div>
        <div class="col-md-2">
            <PublicKeyButton @click="generatePublicKey"/>
        </div>
    </div>
</template>

<script>
import PublicKeyButton from './PublicKeyButton.vue';
export default {
    name: 'PublicKeyField',
    components: {
        PublicKeyButton
    },
    data(){
        return {
            form: {
                publicKey: ''
            }
        }
    },
    methods: {
        generatePublicKey() {
            this.form.publicKey = 'wow, public key'
        }
    }
}
</script>