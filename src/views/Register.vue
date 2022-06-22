<template>
    <div class="container">
        <form @submit.prevent="submit">
        <div>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="form.name">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="form.email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="form.password">
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
            
        </form>
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