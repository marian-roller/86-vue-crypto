<template>
    
    <div class="col-md-2">
        <select 
        id="algorithm" 
        class="form-control form-control-sm" 
        @change="onChange"
        >
            <option :value="null" disabled selected>Choose...</option>
            <option v-for="item in this.algorithms" :value="item.code">{{item.label}}</option>
        </select>
    </div>

</template>

<script>

export default {
    name: 'algorithms',
    props: {
        chooseAlgorithm: Function
    },
    data() {
        return {
            algorithms: [
                { code: 'md5', label: 'md5'},
                { code: 'sha1', label: 'sha1'},
                { code: 'sha256', label: 'sha256'}
            ],
            algorithm: ''
        }
    },
    created() {
        // console.log(this.algorithms)
    },
    methods: {
        onChange(event) {
            this.algorithm = event.target.value;
            this.chooseAlgorithm(this.algorithm)
        },
    }
}
</script>