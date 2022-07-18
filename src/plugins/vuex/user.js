import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/users/auth', data)
                    .then((response) => {
                        console.log('Token olindi')
                        console.log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('token olishda xatolik yuz berdi')

                        reject()
                    })
                    .finally(() => {
                        console.log('Bu funksiya har doim ishlaydi. Yoki then() dan kein, yoki catch() dan kein')
                    })
            })

        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    },
    state: {
        token: null,
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
}
