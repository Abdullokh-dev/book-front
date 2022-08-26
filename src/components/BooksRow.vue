<template>
    <div class="row">
        <!-- Book start -->
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
                    <router-link :to="'/book-info/' + book.id" class="btn btn-primary"> Read </router-link>
                </div>
            </div>
        </div>
        <!-- Book end -->
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BooksRow",
    methods: {
        ...mapActions(['fetchBooks']),
    },
    computed: {
      ...mapGetters(['getBooks']),
    },
    mounted() {
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
