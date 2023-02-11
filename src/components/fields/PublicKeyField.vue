<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">
                <div>Public key:</div>
            </div>
        </div>
        <div :class="this.form.cols">
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
    props: {
        from: String,
    },
    data(){
        return {
            form: {
                rows: null,
                cols: null
            }
        }
    },
    mounted() {
        this.form.rows = 4
        if (this.from === 'signedMessage') {
            this.form.cols = "col-md-10";
        } else {
            this.form.cols = "col-md-8";
        }
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