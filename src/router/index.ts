import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/BateauView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/TabView.vue')
    }
  ]
})

export default router
