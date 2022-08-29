import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

import Test from '@/views/test-page/route.js'

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue'),
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页', icon: 'Accessibility' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },

  Test,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
