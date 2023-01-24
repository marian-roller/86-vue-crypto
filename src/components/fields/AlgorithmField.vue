<template>
    
    <div class="col-md-2">
        <select 
        id="algorithm" 
        class="form-control form-control-sm" 
        v-model="value"
        >
            <option :value="null" disabled selected>Choose...</option>
            <option v-for="item in this.algorithms" :value="item">{{item}}</option>
            <optgroup label="- - - - - - - - - - - -"></optgroup>
            <option v-for="item in this.password_algorithms" :value="item">{{item}}</option>
        </select>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'algorithmfield',
    props: ['modelValue'],
    emits: ['update:modelValue', 'flag'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                if (this.password_algorithms.includes(value)) {
                    this.password_algorithms_flag = true
                } else {
                    this.password_algorithms_flag = false
                }
                this.$emit('update:modelValue', value)
                this.$emit('flag', this.password_algorithms_flag)
            }
        }
    },
    data() {
        return {
            algorithms: null,
            password_algorithms: null,
            password_algorithms_flag: null
        }

    },
    mounted() {

        axios.get('hash/password-algos')
            .then((response) => {
                this.password_algorithms = response.data.result
            })

        axios.get('hash/algos')
            .then((response) => {
                this.algorithms = response.data.result
            })
    }
}
</script>