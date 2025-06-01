import { useApi } from '@/composables/useApi.ts';

const { get, post } = useApi();

export function useAuth(){

  async function login(
    email: string,
    password: string,
    success?: (data?: any) => void,
    error?: (error: any) => void
  ) {
    const response = await post('/auth/login', { email, password });

    if(response.success) {
      success?.(response.data);
    } else {
      error?.(response.error);
    }
  }

  async function logout() {
    await post('/auth/logout');
  }

  async function me() {
    await get('/auth/me');
  }

  return {
    login,
    logout,
    me,
  }
}