<template>
    <div class="row">
        <div class="col-md-2">
            <div class="font-weight-bold small">Block:</div>
        </div>
        <div class="col-md-10">
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text">#</div>
                </div>
                <input 
                type="text" 
                class="form-control" 
                id="blockId"
                v-model="value"
                readonly
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blockidfield',
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