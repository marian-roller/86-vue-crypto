import { createStore } from 'vuex'
import auth from './auth'

export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  },
  modules: {
    auth
  }
})
