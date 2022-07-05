<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Hash start:</div>
        </div>
        <div class="col-md-2">
            <input 
            id="hash-start"
            type="text"
            class="form-control" 
            :maxlength="max"
            v-model="value"
            onkeypress='return event.charCode >= 48 && event.charCode <= 57'
            >
        </div>
        <div class="col-md-8">
            <small>Enter desired hash start (max. 5 numeric digits). Default is '00'</small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hashStartField',
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
            max: 5,
        }
    }
}

</script>