import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, data) {
            state.token = data;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        async signIn({dispatch}, credentials) {
            let response = await axios.post('auth/signin', credentials);
            dispatch('attempt', response.data.token);
        },
        async attempt({commit}, token) {
            commit('SET_TOKEN', token);
            try {
                let response = await axios.get('auth/me', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                commit('SET_USER', response.data);
            } catch (e) {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        }
    },
}
