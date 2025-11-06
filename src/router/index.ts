import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
})

export default router
