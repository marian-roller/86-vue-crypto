<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">
                 <img width="40" src="../assets/encryption.svg" alt="icon">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Home</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/hash" class="nav-link">Hashing</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a id="keysDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Key Pairs
                            </a>

                            <div class="dropdown-menu" aria-labelledby="keysDropdown">
                                <router-link to="/public-key" class="nav-link">Keys generation</router-link>
                                <router-link to="/signed-message" class="nav-link">Signed message</router-link>
                                <router-link to="/encrypted-message" class="nav-link">Encrypted message</router-link>
                                <router-link to="/encrypted-file" class="nav-link">Encrypted file</router-link>

                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a id="blockchainDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blockchain
                            </a>

                            <div class="dropdown-menu" aria-labelledby="blockchainDropdown">
                                <router-link to="/block" class="dropdown-item">Block</router-link>
                                <router-link to="/blockchain" class="dropdown-item">Blockchain</router-link>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a id="encryptionDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Encryption
                            </a>

                            <div class="dropdown-menu" aria-labelledby="encryptionDropdown">
                                <router-link to="/crypt" class="dropdown-item">Encryption</router-link>
                                <router-link to="/steganography" class="dropdown-item">Steganography</router-link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Encrypted chat</router-link>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">

                         <template v-if="authenticated">
                            <li class="nav-item dropdown">
                                <a id="userDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   {{ user.name }}
                                </a>

                                <div class="dropdown-menu" aria-labelledby="userDropdown">
                                    <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>

                                    <a class="dropdown-item" href="#" @click.prevent="signOut">
                                        Sign out
                                    </a>
                                </div>
                            </li>
                        </template>

                        <template v-else>
                            <li class="nav-item">
                                <router-link to="/signin" class="nav-link">Sign in</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/register" class="nav-link">Register</router-link>
                            </li>
                        </template>

                        <li class="nav-item dropdown">
                            <a id="apiDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                API
                            </a>

                            <div class="dropdown-menu" aria-labelledby="apiDropdown">
                                <router-link to="/" class="dropdown-item">Laravel</router-link>
                                <router-link to="/" class="dropdown-item">Ruby on Rails</router-link>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user',
            }),
        },
        methods: {
            ...mapActions({
                signOutAction: 'auth/signOut'
            }),
            signOut() {
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'home'
                    })
                })
            }
        }
    }
</script>