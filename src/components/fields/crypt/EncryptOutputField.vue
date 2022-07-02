<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Output:</div>
        </div>
        <div class="col-md-10">
            <textarea 
            id="encrypt-output"
            class="form-control" 
            rows="6" 
            v-model="output"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptOutputField',
    props: {
        output: String
    },
}

</script>