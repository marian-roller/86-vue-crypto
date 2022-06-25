<template>
    
    <div class="col-md-2">
        <select 
        id="algorithm" 
        class="form-control form-control-sm" 
        @change="onChange"
        v-model="this.value"
        >
            <option :value="null" disabled selected>Choose...</option>
            <option v-for="item in this.algorithms" :value="item">{{item}}</option>
        </select>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'algorithms',
    props: {
        chooseAlgorithm: Function,
        value: String
    },
    data() {
        return {
            algorithms: null,
            algorithm: ''
        }
    },
    mounted() {
        axios.get('hash/algos')
            .then((response) => {
                this.algorithms = response.data.result
            })
    },
    methods: {
        onChange(event) {
            this.algorithm = event.target.value;
            this.chooseAlgorithm(this.algorithm)
        },
    }
}
</script>