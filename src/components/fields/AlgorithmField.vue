<template>
    
    <div class="col-md-2">
        <select 
        id="algorithm" 
        class="form-control form-control-sm" 
        v-model="value"
        >
            <option :value="null" disabled selected>Choose...</option>
            <option v-for="item in this.algorithms" :value="item">{{item}}</option>
        </select>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'algorithmfield',
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
            algorithms: null,
        }
    },
    mounted() {
        axios.get('hash/algos')
            .then((response) => {
                this.algorithms = response.data.result
            })
    }
}
</script>