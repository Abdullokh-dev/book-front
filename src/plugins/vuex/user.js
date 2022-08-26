import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/users/auth', data)
                    .then((response) => {
                        console.log('Token received')
                        console.log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.error('something went wrong while receiving token')

                        reject()
                    })
            })

        }
    },
    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        }
    },
    state: {
        token: localStorage.getItem('token'),
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
}
