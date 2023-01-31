console.log('keys');

export default {
    namespaced: true,
    state () {
        return {
            public_key: null
          }
        
    },
    getters: {

    },
    mutations: {

    }, 
    actions: {
        async publicKey({dispatch}, pKey) {
            console.log(pKey);
        }
    }

 }