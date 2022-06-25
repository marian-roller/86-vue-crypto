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
                            <small>sha256</small>
                        </div>

                        <div class="col-md-6">
                            <h4>Block visualization</h4>
                        </div>

                        <div class="col-md-2">
                            <div class="btn btn-secondary btn-sm d-block" @click="">Reset</div>
                        </div>
                    
                    </div>
                </div>

                <div class="card-body">



                    <div class="row">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Block:</div>
                        </div>
                        <div class="col-md-10">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">#</div>
                                </div>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="block"
                                >
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Nonce:</div>
                        </div>
                        <div class="col-md-10">
                            <input 
                            id="nonce"
                            type="text"
                            class="form-control" 
                            @keyup=""
                            >
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Data:</div>
                        </div>
                        <div class="col-md-10">
                            <textarea 
                            id="input"
                            class="form-control" 
                            rows="6" 
                            
                            @keyup=""
                            ></textarea>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-2">
                            <div class="font-weight-bold">Hash:</div>
                        </div>
                        <div class="col-md-10">
                            <input 
                            id="hash"
                            type="text"
                            class="form-control" 
                            readonly
                            
                            >
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted text-left">
                    <div class="row">
                        <div class="col-md-2 offset-md-2">
                            <div class="btn btn-secondary btn-sm">Mine</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'block',

}
</script>