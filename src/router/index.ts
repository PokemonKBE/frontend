import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buy-sets',
      name: 'buy-sets',
      component: () => import('../views/BuySetView.vue')
    },
    {
      path: '/buy-cards',
      name: 'buy-cards',
      component: () => import('../views/BuyCardView.vue')
    },
    {
      path: '/build-sets',
      name: 'build-sets',
      component: () => import('../views/BuyCardView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
