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
            rows="6" 
            :value="form.privateKey"
            ></textarea>
        </div>
        <div class="col-md-2">
            <PrivateKeyButton @click="generatePrivateKey"/>
        </div>
    </div>
</template>

<script>
import PrivateKeyButton from './PrivateKeyButton.vue';
export default {
    name: 'PrivateKeyField',
    props: {
        privateKey: String
    },
    components: {
        PrivateKeyButton
    },
    data(){
        return {
            form: {
                privateKey: ''
            }
        }
    },
    methods: {
        generatePrivateKey() {
            this.form.privateKey = 'wow, private key';
        }
    }
}
</script>