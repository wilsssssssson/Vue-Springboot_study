import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import WatchView from '@/views/WatchView.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
     
    {
    path: '/about',
    component: AboutView  
    },
    {
    path: '/watch',
    component: WatchView
    }
]})
export default router

















// vue2
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
//   {
//     path: '/watch',
//     name: 'watch',
//     component: () => import( '../views/WatchView.vue')
//   },
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router


