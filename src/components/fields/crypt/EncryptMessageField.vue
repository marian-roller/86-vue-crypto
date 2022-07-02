<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Text:</div>
        </div>
        <div class="col-md-10">
            <textarea 
            id="encrypt-message"
            class="form-control" 
            rows="6" 
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptMessageField',
    props: {
        
    },
}

</script>