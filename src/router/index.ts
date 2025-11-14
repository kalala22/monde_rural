import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/pages/HomePageView.vue'
import AboutPageView from '@/pages/AboutPageView.vue'
import JoinUsPageView from '@/pages/JoinUsPageView.vue'
import DashbordInterfaceView from '@/pages/DashbordInterfaceView.vue'
import ConnexionView from '@/pages/ConnexionView.vue'
import NewsPageView from '@/pages/NewsPageView.vue'
import ContactPageView from '@/pages/ContactPageView.vue'

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
      path: '/news',
      component: NewsPageView,
    },
    {
      path: '/join-us',
      component: JoinUsPageView,
    },
    {
      path: '/contact',
      component: ContactPageView,
    },
    {
      path: '/admin',

      component: ConnexionView,
      meta: { hideLayout: true, requiresAuth: true }, // Ajout du champ méta
    },
    {
      path: '/admin/dashboard',

      component: DashbordInterfaceView,
      meta: { hideLayout: true, requiresAuth: true }, // Ajout du champ méta
    },
  ],
  history: createWebHashHistory(),
})

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = !!localStorage.getItem('authToken')

//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

//   // LOGIQUE DE REDIRECTION

//   if (requiresAuth && !isAuthenticated) {
//     next({ name: 'admin' })
//   } else if (to.name === 'admin' && isAuthenticated) {
//     next({ name: 'dashboard' })
//   } else {
//     next()
//   }
// })
export default router
