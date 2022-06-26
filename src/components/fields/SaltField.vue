<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold">salt:</div>
        </div>
        <div class="col-md-10">
            <input 
            id="salt"
            type="text"
            class="form-control" 
            @keyup="onChange"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'saltfield',
    props: {
        convertSalt: Function
    },
    data() {
        return {
            salt: null
        }
    },
    methods: {
        onChange(event) {
            this.salt = event.target.value
            this.convertSalt(this.salt)            
        }
    }
}
</script>