<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Salt (any string):</div>
        </div>
        <div class="col-md-10">
            <input 
            id="salt"
            type="text"
            class="form-control" 
            v-model="value"
            :disabled="disableSalt == 1"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'saltfield',    
    props: ['modelValue', 'disableSalt'],
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