import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/BuyCardsView.vue')
    },
    {
      path: '/buy-sets',
      name: 'buy-sets',
      component: () => import('../views/BuyDecksView.vue')
    },
    {
      path: '/buy-cards',
      name: 'buy-cards',
      component: () => import('../views/BuyCardsView.vue')
    },
    {
      path: '/build-sets',
      name: 'build-sets',
      component: () => import('../views/BuildDecksView.vue')
    },
    {
      path: '/card-detail/:id',
      name: 'card-detail',
      component: () => import('../views/CardDetailView.vue')
    }

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  ]
})

export default router
