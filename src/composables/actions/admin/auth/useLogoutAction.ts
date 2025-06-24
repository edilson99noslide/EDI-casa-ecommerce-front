import router from '@/router';

// COMPONENT
import { toast } from 'vue-sonner';

// COMPOSABLES
import { useAuth } from '@/composables/api/auth/useAuth';
import { useLoading } from '@/composables/useLoading';

import { useUserStore } from '@/stores/useUser';

export function useLogoutAction() {
  const { logout } = useAuth();
  const { show, hide } = useLoading();
  const store = useUserStore();

  function logoutUser() {
    show();

    logout(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        store.logout();

        hide();

        router.replace('/admin/login');
      },
      () => {
        hide();
        toast.error('Ocorreu um erro ao tentar deslogar', {
          duration: 4000,
          dismissible: false,
          classes: {
            toast: 'p-4 bg-secodnary text-color-bg border rounded-[5px] shadow-xl',
          }
        });
      }
    );
  }

  return {
    logoutUser
  };
}