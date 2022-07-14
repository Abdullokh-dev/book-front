import {createRouter, createWebHistory} from "vue-router"
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/book-info',
        component: () => import('../pages/BookInfoPage')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
