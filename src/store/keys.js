export default {
    namespaced: true,
    state () {
        return {
            public_key: null
          }
    },
    getters: {
        publicKey(state) {
            return state.public_key
        },
    },
    mutations: {
        SET_PUBLIC_KEY(state, data) {
            state.public_key = data;
        },
    }, 
    actions: {
        async publicKey({dispatch}, pKey) {
            return dispatch('attempt', pKey);
        },
        async attempt({commit, state}, pKey) {
            commit('SET_PUBLIC_KEY', pKey);
        }
    }

 }