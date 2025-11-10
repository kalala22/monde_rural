import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/pages/HomePageView.vue'
import AboutPageView from '@/pages/AboutPageView.vue'
import JoinUsPageView from '@/pages/JoinUsPageView.vue'
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
    {
      path: '/join-us',
      component: JoinUsPageView,
    },
  ],
  history: createWebHashHistory(),
})

export default router
