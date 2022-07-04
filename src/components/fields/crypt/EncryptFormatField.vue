<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Format:</div>
        </div>
        <div class="col-md-10">
           <select 
            id="encrypt-format" 
            class="form-control form-control-sm" 
            v-model="value"
            >
                <option :value="null" disabled selected>Choose encoding format...</option>
                <option v-for="(value, key) in this.format" :value="value">{{key}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptFormatField',
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
            format: {
                'Base64': 'base64',
                'Hex': 'hex',
            }
        }
    },
}

</script>