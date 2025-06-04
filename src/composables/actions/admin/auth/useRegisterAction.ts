import { ref } from 'vue';

// COMPONENT
import { toast } from 'vue-sonner';

// COMPOSABLE
import { useRegister } from '@/composables/api/register/useRegister';
import { useLoading } from '@/composables/useLoading';

export function useRegisterAction() {
  const { register } = useRegister();
  const { show, hide } = useLoading();

  const nameRegister = ref<string>('');
  const emailRegister = ref<string>('');
  const passwordRegister = ref<string>('');
  const passwordConfirmationRegister = ref<string>('');
  const messageRegister = ref<string>('');

  function sendRegister() {
    show();
    register(
      {
        name: nameRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
        password_confirmation: passwordConfirmationRegister.value
      },
      (responseRegister) => {
        hide();
        toast.success(responseRegister.data.message, {
          duration: 4000,
          dismissible: false,
          classes: {
            toast: 'p-4 bg-primary text-color-bg border rounded-[5px] shadow-xl',
          }
        });
        messageRegister.value = responseRegister.message;
      },
      (responseRegister) => {
        hide();
        toast.error(responseRegister.errors.message, {
          duration: 4000,
          dismissible: false,
          classes: {
            toast: 'p-4 bg-secondary text-color-bg border rounded-[5px] shadow-xl',
          }
        });
        messageRegister.value = responseRegister.errors.message;
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