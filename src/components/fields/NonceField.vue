<template>
                        
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Nonce:</div>
        </div>
        <div class="col-md-10">
            <input 
            id="nonce"
            type="text"
            class="form-control" 
            v-model="value"
            readonly
            >
        </div>
    </div>

</template>

<script>
export default {
    name: 'noncefield',
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>