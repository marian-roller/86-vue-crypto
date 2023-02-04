<template>
    <div>
        <section class="mt-4">
            <div class="card">

                <div class="card-header text-center">

                    <div class="row">
                    
                        <div class="col-md-2 text-left">
                            <small>Algorithm: </small>
                        </div>

                        <div class="col-md-2 text-left">
                            <small>Test</small>
                        </div>

                        <div class="col-md-6">
                            <h4>Steganography</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="clearForm">Reset</div>
                        </div>
                    
                    </div>

                    <div class="row">
                        <InstructionBlock type="steganography"/>
                    </div>
                </div>

                <div class="card-body">
                    Body
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import InstructionBlock from '../fields/InstructionBlock.vue'
export default {
    name: 'Steganography',
    components: {
        InstructionBlock
    },
    methods: {
        clearForm() {

        }
    }
}

</script>