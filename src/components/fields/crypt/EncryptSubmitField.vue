<template>
    <div class="row mt-3">
        <div class="col-md-10 offset-md-2">
            <div class="btn btn-secondary btn-sm d-block">
                {{ this.sumbitprefix }} the message
                
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'EncryptSubmitField',
    props: ['sumbitprefix'],
}
</script>