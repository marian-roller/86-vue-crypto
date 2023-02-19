import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { store } from './store'

import "@/store/subscriber"

axios.defaults.baseURL = import.meta.env.VITE_API_URL

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(router).use(store).mount('#app')
})


