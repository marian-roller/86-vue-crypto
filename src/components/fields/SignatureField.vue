<template>
    <div class="row mt-3">
        <div class="col-md-2 pr-0">
            <div class="font-weight-bold small">
                <div>Signature:</div>
            </div>
        </div>
        <div class="col-md-10">
            <textarea 
            id="signature-field"
            class="form-control" 
            :rows="4" 
            :value="signature"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignatureField',
    props: {
        signature: String
    },
}
</script>

<style>
    #signature-field {
        font-size: 0.75rem !important;
    }
</style>