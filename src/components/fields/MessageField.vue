<template>
    <div class="row mt-3">
        <div class="col-md-2 pr-0">
            <div class="font-weight-bold small">
                <div>Message:</div>
            </div>
        </div>
        <div class="col-md-10">
            <textarea 
            id="message-field"
            class="form-control" 
            :rows="4" 
            v-model="value"
            ></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageField',
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