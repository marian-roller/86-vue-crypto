<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Data:</div>
        </div>
        <div class="col-md-10">
            <textarea 
            id="input"
            class="form-control" 
            rows="6" 
            v-model="value"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'datafield',

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