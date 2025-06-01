import {ref} from 'vue';

// COMPOSABLE
import { useAuth } from '@/composables/api/auth/useAuth.ts';

export function useLoginAction() {
  // Backend
  const { login } = useAuth();

  const email = ref<string>('');
  const password = ref<string>('');

  function sendLogin() {
    login(
      email.value,
      password.value,
      (responseLogin) => {
        console.log(responseLogin);
      },
      (responseLogin) => {
        console.log(responseLogin);
      }
    );
  };

  return {
    email,
    password,
    sendLogin,
  }
}