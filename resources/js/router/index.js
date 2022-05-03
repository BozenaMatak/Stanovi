import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/stanovi',
        name: 'stanovi',
        component: () => import("../components/stanovi.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router