import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClinicalPost from '@/views/ClinicalPost.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const adminRoute: RouteRecordRaw[] = [{}]

const userRoute: RouteRecordRaw[] = [{}]

const baseRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false,
      level: ""
    }
  },
  {
    path: '/clinicalpost',
    name: 'clinicalpost',
    component: ClinicalPost,
    meta: {
      requiresAuth: false,
      level: ""
    }
  },
  

  // 🛑 Catch-all 404 route (must be last!)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoute,
    ...userRoute,
    ...baseRoute
  ],
})

// ✅ Global Navigation Guard
router.beforeEach((to, from, next) => {
  // const auth = useAuthStore()

  if (to.meta.requiresAuth) {
    next('/login') // redirect to login if not authenticated
  } else {
    next() // proceed
  }
})

export default router
