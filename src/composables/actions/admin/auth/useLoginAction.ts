import {ref} from 'vue';

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
        messageLogin.value = responseLogin.message;
      },
      () => {
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