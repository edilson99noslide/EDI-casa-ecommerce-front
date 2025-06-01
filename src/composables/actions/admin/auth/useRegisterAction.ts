import { ref } from 'vue';

// COMPOSABLE
import {useRegister} from '@/composables/api/register/useRegister';

const { register } = useRegister();

export function useRegisterAction() {
  const nameRegister = ref<string>('');
  const emailRegister = ref<string>('');
  const passwordRegister = ref<string>('');
  const passwordConfirmationRegister = ref<string>('');
  const messageRegister = ref<string>('');

  function sendRegister() {
    register(
      {
        name: nameRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
        password_confirmation: passwordConfirmationRegister.value
      },
      (responseRegister) => {
        messageRegister.value = responseRegister.message;
      },
      (responseRegister) => {
        messageRegister.value = responseRegister.message;
      }
    );
  }

  return {
    nameRegister,
    emailRegister,
    passwordRegister,
    passwordConfirmationRegister,
    messageRegister,
    sendRegister
  }
}