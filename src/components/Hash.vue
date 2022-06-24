<template>
    <div>
        <section class="mt-4">
            <div class="card">
                <div class="card-header text-center">
                    <h4>Hash generator</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-1">
                            <p>data:</p>
                        </div>
                        <div class="col-md-11">
                            <textarea 
                            id="input"
                            class="form-control" 
                            rows="6" 
                            v-model="form.input"
                            @keyup="sendToConvert"
                            ></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-1">
                            <p>hash:</p>
                        </div>
                        <div class="col-md-11">
                            <input 
                            id="hash"
                            type="text"
                            class="form-control" 
                            readonly
                            v-model="form.hash"
                            >
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted text-right">
                    <small>Some minor action</small>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
export default {
    name: 'hash',
    data() {
        return {
            form: {
                algorithm: null,
                input: null,
                salt: null,
                hashed: null,
                hash: null
            }
        }
    },
    methods: {
        sendToConvert() {
            axios.post('hash/convert', 
            {
                algorithm: md5,
                input: this.form.input,
            })
            .then((response) => {
                this.form.hash = response.data.result
            })
        },
        clearForm(event) {
            this.form.hashed = '';
        }
    }
}
</script>