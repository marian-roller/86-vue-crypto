<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Key:</div>
        </div>
        <div class="col-md-10">
            <input 
            id="encrypt-key"
            type="text"
            class="form-control" 
            v-model="value"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptKeyField',
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
    },
    data() {
        return {
            key: null
        }
    },
}

</script>