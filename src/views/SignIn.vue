<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mt-4">
                
                    <div class="card-header text-center">
                        <h1>Sign in</h1>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="form-group row">
                                <label class="col-md-2" for="email">Email</label>
                                <input class="form-control col-md-10" type="text" id="email" name="email" v-model="form.email">
                            </div>
                            <div class="form-group row">
                                <label class="col-md-2" for="password">Password</label>
                                <input class="form-control col-md-10" type="password" id="password" name="password" v-model="form.password">
                            </div>

                            <div class="row">
                                <div class="col-md-10 offset-md-2 p-0">
                                    <button class="btn btn-primary form-control" type="submit">Sign in</button>
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'signin',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
                signIn: 'auth/signIn'
            }),
        submit() {
            this.signIn(this.form).then(() => {
                this.$router.replace({
                    name: 'dashboard'
                })
            }).catch((e) => {
                // handle behaviour, validation on singin failed
                console.log(e.response.data);
            })
        }
    }
}
</script>

