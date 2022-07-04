<template>
    <div class="row mt-3">
        <div class="col-md-2 pr-0">
            <div class="font-weight-bold small">{{ this.label }}</div>
        </div>
        <div class="col-md-10">
            <textarea 
            id="encrypt-output"
            class="form-control" 
            rows="6" 
            v-model="value"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptOutputField',
    props: ['modelValue', 'label'],
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
}

</script>