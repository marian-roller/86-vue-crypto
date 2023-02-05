<template>
    <div class="col offset-md-2 w-100 small text-info font-weight-bold text-left">

        <div class="border-top border-bottom" v-if="type=='hash'">
            1. Choose hashing algorithm. 2. Type text to be hashed. 3. Optionally add custom salt.
        </div>
        <div class="border-top border-bottom" v-if="type=='block'">
            1. Enter data to be hashed. 2. Determine first digits of desired hash. 3. Mine
        </div>
        <div class="border-top border-bottom" v-if="type=='public-key'">
            1. Generate private / public key pair
        </div>

        <div class="border-top border-bottom" v-if="type=='signed-message'">
            1. Write message. 2. Get public key. 3. Sign message. 4. Send. 5. Receive. 6. Verify
        </div>

        <div class="border-top border-bottom" v-if="type=='encrypted-message'">
            1. encrypted-message
        </div>

        <div class="border-top border-bottom" v-if="type=='encrypted-file'">
            1. encrypted-file
        </div>

        <div class="border-top border-bottom" v-if="type=='steganography'">
            1. steganography
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'instructionBlock',
    props: ['type'],
}
</script>