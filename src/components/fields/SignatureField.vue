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
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignatureField'
}
</script>