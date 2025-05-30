import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/ViewSite.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/ViewAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
