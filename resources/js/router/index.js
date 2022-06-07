import {createRouter, createWebHistory} from 'vue-router' 

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home/index')
    },
    {
        path: '/login',
        name: 'login',
        // beforeEnter: auth,
        component: () => import('../components/Login/index')
    }, 
    {
        path: '/register',
        name: 'register',
        component: () => import("../components/register/index")
    }, 
    {
        path: '/register/privatni-korisnik',
        name: 'register_private',
        component: () => import("../components/privatni_registracija/index")
    }, 
    {
        path: '/register/poslovni-korisnik',
        name: 'register-poslovni',
        component: () => import("../components/poslovni_registracija/index")
    },
    
    {
        path: '/stanovi/:id',
        name: 'stanovi',
        component: () => import("../components/Stanovi/index")
    },
    {
        path: '/predajoglas',
        name: 'predajoglas',
        component: () => import("../components/PredajOglas/index")
    },
    {
        path: '/promjena-lozinke',
        name: 'promjena-lozinke',
        component: () => import("../components/Promjena-lozinka/index")
    },
    {
        path: '/moji-podaci',
        name: 'moji-podaci',
        component: () => import("../components/MojiPodaci/index")
    },
    {
        path: '/moji-oglasi',
        name: 'moji-oglasi',
        component: () => import("../components/MojiOglasi/index")
    },
    {
        path: '/filtrirani-oglasi/:tip',
        name: 'filtrirani-oglasi',
        component: () => import("../components/Filtrirani_oglasi/index")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router