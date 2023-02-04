export default {
    namespaced: true,
    state () {
        return {
            public_key: null,
            private_key: null
          }
    },
    getters: {
        publicKey(state) {
            return state.public_key
        },
        privateKey(state) {
            return state.private_key
        },
    },
    mutations: {
        SET_PRIVATE_KEY(state, data) {
            state.private_key = data;
        },
        SET_PUBLIC_KEY(state, data) {
            state.public_key = data;
        },
    }, 
    actions: {
        async privateKey({dispatch}, pKey) {
            const typeOfKey = 'private'
            return dispatch('attempt', {pKey, typeOfKey});
        },
        async publicKey({dispatch}, pKey) {
            const typeOfKey = 'public'
            return dispatch('attempt', {pKey, typeOfKey});
        },
        async attempt({commit, state}, data) {
            if (data.typeOfKey === 'public') {
                commit('SET_PUBLIC_KEY', data.pKey);
            }
            if (data.typeOfKey === 'private') {
                commit('SET_PRIVATE_KEY', data.pKey);
            }
        }
    }

 }