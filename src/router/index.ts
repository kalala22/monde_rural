import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomePageView.vue'
import AboutPageView from '@/pages/AboutPageView.vue'
const router = createRouter({
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutPageView,
    },
  ],
  history: createWebHistory(),
})

export default router
