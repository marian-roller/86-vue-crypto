import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { store } from './store'

import "@/store/subscriber"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

store.dispatch('auth/attempt', localStorage.getItem('token'))

createApp(App).use(router).use(store).mount('#app')
