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
            :rows="this.form.rows" 
            :value="publicKey"
            ></textarea>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PublicKeyField',
    data(){
        return {
            form: {
                rows: null
            }
        }
    },
    mounted() {
        this.form.rows = 4
    },
    updated() {
        this.checkRows;
    },
    computed: {
        ...mapGetters({
            publicKey: 'keys/publicKey',
        }),
        checkRows() {
            if (this.publicKey) {
                this.form.rows = 10
            } else {
                this.form.rows = 2
            }
        }
    }
}
</script>

<style>
    #public-key {
        font-size: 0.75rem !important;
    }
</style>