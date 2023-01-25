<template>
    <div class="col offset-md-2 w-100 small text-info font-weight-bold text-left">

        <div class="border-top border-bottom" v-if="type=='hash'">
            1. Choose hashing algorithm. 2. Type text to be hashed. 3. Optionally add custom salt.
        </div>
        <div class="border-top border-bottom" v-if="type=='block'">
            1. Enter data to be hashed. 2. Determine first digits of desired hash. 3. Mine
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'instructionBlock',
    props: ['type'],
}
</script>