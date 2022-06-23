<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mt-4">

                    <div class="card-header text-center">
                        <h1>Register</h1>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="form-group row">
                                <label class="col-md-2" for="name">Name</label>
                                <input class="form-control col-md-10" type="text" id="name" name="name" v-model="form.name">
                            </div>
                            <div class="form-group row">
                                <label class="col-md-2" for="email">Email</label>
                                <input class="form-control col-md-10" type="email" id="email" name="email" v-model="form.email">
                            </div>
                            <div class="form-group row">
                                <label class="col-md-2" for="password">Password</label>
                                <input class="form-control col-md-10" type="password" id="password" name="password" v-model="form.password">
                            </div>

                            <div class="row">
                                <div class="col-md-10 offset-md-2 p-0">
                                    <button class="btn btn-primary form-control" type="submit">Register</button>
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
// import axios from 'axios'
import { mapActions } from 'vuex'

    export default {
    name: 'register',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
                register: 'auth/register'
            }),

        submit() {
            this.register(this.form).then(() => {
                this.$router.replace({
                    name: 'dashboard'
                    })
            }).catch(() => {
                // handle behaviour, validation on register failed
                console.log('register failed')
            })


            // let response = await axios.post('auth/register', this.form)
            // console.log(response.data);
        }


        // async submit() {
        //     let response = await axios.post('auth/register', this.form)
        //     console.log(response.data);
        // }
    }
}
</script>

<style>
</style>