import axios from "./axios";

export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/categories')
                    .then((response) => {
                        console.log('Kategoriyalar olindi')
                        console.log(response)

                        let categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }

                        context.commit('updateCategories', categories)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriyalar olishda xatolik yuz berdi')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories
        }
    },
    state: {
        categories: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getCategories(state) {
            return state.categories.models
        }
    }
}
