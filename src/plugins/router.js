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
    },
    {
        path: '/login',
        component: () => import('../pages/LoginPage')
    },

]

export default createRouter({
    history: createWebHistory(),
    routes,
})
