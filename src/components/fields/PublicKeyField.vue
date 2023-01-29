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
            rows="10" 
            :value="form.publicKey"
            ></textarea>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PublicKeyField',
    components: {
    },
    data(){
        return {
            form: {
                publicKey: ''
            }
        }
    },
    methods: {
    }
}
</script>