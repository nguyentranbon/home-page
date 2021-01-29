import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import(/* webpackChunkName: "vsf-home" */ '@/pages/Home.vue')
const Marketplace = () => import(/* webpackChunkName: "vsf-home" */ '@/pages/Marketplace.vue')
const Community = () => import(/* webpackChunkName: "vsf-home" */ '@/pages/Community.vue')
const Auction = () => import(/* webpackChunkName: "vsf-home" */ '@/pages/Auction.vue')
Vue.use(VueRouter)

let routes = [
  {path: '/',name: 'home', component: Home},
  {path: '/marketplace',name: 'Marketplace', component: Marketplace},
  {path: '/community',name: 'Community', component: Community},
  {path: '/auction',name: 'Auction', component: Auction},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
