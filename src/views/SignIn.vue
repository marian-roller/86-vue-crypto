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
            }).catch(() => {
                // handle behaviour, validation on singin failed
                console.log('sign in failed');
            })
        }
    }
}
</script>

