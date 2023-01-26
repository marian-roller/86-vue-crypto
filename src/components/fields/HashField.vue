<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">
                <div>Generated hash:</div>
                <div v-if="type =='block'">(of ID, Nonce and Data)</div>
            </div>
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
        hashed: String,
        type: String
    },
}

</script>