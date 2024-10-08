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
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login.vue'),
    },
    {
      name: 'sign-up',
      path: '/signup',
      component: () => import('@/views/SignUp.vue'),
    }
  ]
})

export default router
