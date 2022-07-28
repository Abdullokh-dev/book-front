<template>
    <div class="row">
        <!-- Kitob boshlandi -->
        <h1>{{booksTitle}}</h1>
        <div
            v-for="book of getBooks"
            v-bind:key="book.id"
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <div class="card">
                <img src="/img/Otkan-kunlar.jpg" class="card-img-top" alt="O'tkan Kunlar Romani">
                <div class="card-body">
                    <h5 class="card-title"> {{book.name}} </h5>
                    <p class="card-text"> {{book.description}} </p>
                    <router-link to="book-info" class="btn btn-primary"> O'qish </router-link>
                </div>
            </div>
        </div>
        <!-- Kitob tugadi -->
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BooksRow",
    methods: {
        ...mapActions(['fetchBooks'])
    },
    computed: {
      ...mapGetters(['getBooks']),
      booksTitle() {
          return 'Kitoblar'
      }
    },
    mounted() {
        console.log('Kitoblar komponenti App ga ulandi')

        this.fetchBooks(this.$route.params.id)
    },
    watch: {
        '$route.params.id'() {
            this.fetchBooks(this.$route.params.id)
        }
    }
}
</script>

<style scoped>

</style>
