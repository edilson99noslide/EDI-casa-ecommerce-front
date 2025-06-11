import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/useUser';

const routes = [
  {
    path: '/',
    component: () => import('@/views/site/ViewSite.vue')
  },
  {
    path: '/admin/login',
    component: () => import('@/views/admin/ViewAdminLogin.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/ViewAdmin.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'admin.dashboard',
        component: () => import('@/views/admin/dashboard/ViewDashboard.vue'),
      },
      {
        path: 'users',
        name: 'admin.users',
        component: () => import('@/views/admin/user/listing/ViewUserListing.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const store = useUserStore();

  try {
    await store.fetchUser(); // Tenta buscar o usuário apenas uma vez
    if (to.path === '/admin/login') {
      next('/admin'); // Se já logado, redireciona do login
    } else {
      next(); // Se tudo certo, continua
    }
  } catch (error) {
    if (to.meta.requiresAuth) {
      next('/admin/login'); // Não autenticado, redireciona
    } else {
      next(); // rota pública
    }
  }
})

export default router
