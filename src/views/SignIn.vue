<template>
    <div class="container">
        <form @submit.prevent="submit">
            <div>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" v-model="form.email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="form.password">
            </div>
            <div>
                <button type="submit">Sign in</button>
            </div>
            
        </form>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'signin',
    component: {
        
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        // async submit() {
        //     this.$store.commit('increment')
        //     console.log(this.$store.state.count)
            
        //     let response = axios.post('auth/signin', this.form);
        //     console.log(response.data);
        // }
        ...mapActions({
                signIn: 'auth/signIn'
            }),
        submit() {
            this.signIn(this.form)
            
        }
    }
}
</script>

