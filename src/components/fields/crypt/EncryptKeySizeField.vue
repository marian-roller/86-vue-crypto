<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Key Size:</div>
        </div>
        <div class="col-md-10">
           <select 
            id="encrypt-key-size" 
            class="form-control form-control-sm" 
            v-model="value"
            >
                <option :value="null" disabled selected>Choose...</option>
                <option v-for="(value, key) in this.keysize" :value="value">{{key}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptModeField',
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
            keysize: {
                '128 bits': '128',
                '192 bits': '192',
                '256 bits': '256'
            }
        }
    },
}

</script>