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
        async register({dispatch}, credentials) {
            let response = await axios.post('auth/register', credentials);
            return dispatch('attempt', response.data.token);
            
        },
        async signIn({dispatch}, credentials) {
            let response = await axios.post('auth/signin', credentials);
            return dispatch('attempt', response.data.token);
        },
        async attempt({commit, state}, token) {
            
            if (token) {
                commit('SET_TOKEN', token); 
            }

            if (!state.token) {
                return
            }
            
            // here subscriber.js listens to mutation -> and set proper headers
            try {
                let response = await axios.get('auth/me');
                commit('SET_USER', response.data);
            } catch (e) {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },
        signOut({ commit }) {
            axios.post('auth/signout');
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        }
    },
}
