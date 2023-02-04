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
            :value="publicKey"
            ></textarea>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PublicKeyField',
    computed: {
        ...mapGetters({
            publicKey: 'keys/publicKey',
        }),
    }
}
</script>