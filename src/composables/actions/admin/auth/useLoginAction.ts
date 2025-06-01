import {ref} from 'vue';

// COMPONENT
import { toast } from 'vue-sonner';

// COMPOSABLE
import { useAuth } from '@/composables/api/auth/useAuth';

export function useLoginAction() {
  // Backend
  const { login } = useAuth();

  const emailLogin = ref<string>('');
  const passwordLogin = ref<string>('');
  const messageLogin = ref<string>('');

  function sendLogin() {
    login(
      emailLogin.value,
      passwordLogin.value,
      (responseLogin) => {
        toast.success(responseLogin.message, {
          duration: 4000,
          dismissible: false,
          classes: {
            toast: 'p-4 bg-primary text-color-bg border rounded-[5px] shadow-xl',
          }
        });

        messageLogin.value = responseLogin.message;
      },
      (responseLogin) => {
        toast.error(responseLogin.message, {
          duration: 4000,
          dismissible: false,
          classes: {
            toast: 'p-4 bg-secondary text-color-bg border rounded-[5px] shadow-xl',
          }
        });

        messageLogin.value = 'Usuário ou senha incorreto.';
      }
    );
  };

  return {
    emailLogin,
    passwordLogin,
    messageLogin,
    sendLogin,
  }
}