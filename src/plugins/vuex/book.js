import axios from "./axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) {
            let categoryUrl = ''

            if (categoryUrl !== null) {
                categoryUrl = '?category=' + categoryId
            }

            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/books' + categoryUrl)
                    .then((response) => {
                        console.log('Books fetched')
                        console.log(response)

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }

                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        console.error('something went wrong while fetching books')
                        reject()
                    })
            })
        },
        fetchBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/books/' + bookId)
                    .then((response) => {
                        console.log('Book fetched')
                        console.log(response)

                        let book = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            category: response.data.category
                        }

                        context.commit('updateBook', book)
                        resolve()
                    })
                    .catch(() => {
                        console.error('something went wrong while fetching book')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateBooks(state, books) {
            state.books = books
        },
        updateBook(state, book) {
            state.book = book
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0
        },
        book: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null
        }
    },
    getters: {
        getBooks(state) {
            return state.books.models
        },
        getBook(state) {
            return state.book
        }
    }
}
