// TYPE
import type { BodyRegister } from '@/types/register/register.type';

// COMPOSABLE
import { useApi } from '@/composables/useApi';

const { post } = useApi();

export function useRegister() {
  async function register(
    data?: BodyRegister,
    success?: (data: any) => void,
    error?: (error: any) => void,
  ) {
    if (data === undefined)
      return false;

    const response = await post('/auth/register', data);

    if(response.success) {
      success?.(response.data);
    } else {
      error?.(response.data);
    }
  }

  return {
    register
  }
}