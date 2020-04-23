import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nos-produits',
    name: 'Produits',
    component: () => import(/* webpackChunkName: "produits" */ '../views/Produits.vue'),
    meta: {
      title: 'Nos produits | Marshall'
    }
  },
  {
    path: '/produit/:id',
    name: 'Produit',
    component: () => import(/* webpackChunkName: "produit" */ '../views/Produit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
