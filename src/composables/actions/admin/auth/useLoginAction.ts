import {ref} from 'vue';
import { useRouter } from 'vue-router';

// COMPONENT
import { toast } from 'vue-sonner';

// COMPOSABLE
import { useAuth } from '@/composables/api/auth/useAuth';

export function useLoginAction() {
  // Backend
  const { login, validateTwoFactor } = useAuth();

  const router = useRouter();
  const emailLogin = ref<string>('');
  const passwordLogin = ref<string>('');
  const messageLogin = ref<string>('');
  const twoFactorRequired = ref<boolean>(false);
  const codeTwoFA = ref<string[]>([]);

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

        if(responseLogin.two_factor_required) {
          twoFactorRequired.value = true;

          localStorage.setItem('token', responseLogin.token);
        }

        router.push('/admin');

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

  function sendTwoFactor(code: string) {
    validateTwoFactor(
      code,
      (responseValidadeTwoFactor) => {
        toast.success(responseValidadeTwoFactor.message, {
          duration: 4000,
          dismissible: false,
          classes: {
            toast: 'p-4 bg-primary text-color-bg border rounded-[5px] shadow-xl',
          }
        });

        router.push('/admin');
      },
      (responseValidadeTwoFactor) => {
        toast.error(responseValidadeTwoFactor.message, {
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
    emailLogin,
    passwordLogin,
    messageLogin,
    twoFactorRequired,
    codeTwoFA,
    sendLogin,
    sendTwoFactor,
  }
}