import { createRouter, createWebHistory } from 'vue-router';
import {useApi} from "@/composables/useApi.ts";

const routes = [
  {
    path: '/',
    component: () => import('@/views/site/ViewSite.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/ViewAdmin.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/login',
    component: () => import('@/views/admin/ViewAdminLogin.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  if (to.meta.requiresAuth) {
    const api = useApi();

    const { data, errors } = await api.get('/auth/me');

    if(errors) {
      localStorage.removeItem('user');
      next('/admin/login');
    } else {
      localStorage.setItem('user', JSON.stringify(data));
      next();
    }
  } else {
    next();
  }
})

export default router
