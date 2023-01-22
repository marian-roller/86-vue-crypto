<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Generated hash:</div>
        </div>
        <div class="col-md-10">
            <input 
            id="hash"
            type="text"
            class="form-control" 
            readonly
            :value="hashed"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'hashField',
    props: {
        hashed: String
    },
}

</script>