<template>
    <div class="row mt-3">
        <div class="col-md-2">
            <div class="font-weight-bold small">Mode:</div>
        </div>
        <div class="col-md-10">
           <select 
            id="encrypt-mode" 
            class="form-control form-control-sm" 
            v-model="value"
            >
                <option :value="null" disabled selected>Choose the mode...</option>
                <option v-for="(value, key) in this.modes" :value="value">{{key}}</option>
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
            modes: {
                'CBC': 'cbc',
                // check proper flow for commented modes
                // 'CBC-HMAC-SHA1': 'cbc-hmac-sha1',
                // 'CBC-HMAC-SHA25': 'cbc-hmac-sha256',
                'CFB1': 'cfb1',
                'CFB8': 'cfb8',
                'CTR (recommended)': 'ctr',
                // 'OCB': 'ocb',
                // ctr and ofb and cfb - compatible
                'OFB': 'ofb',
                'CFB': 'cfb',
            }
        }
    },
}

</script>