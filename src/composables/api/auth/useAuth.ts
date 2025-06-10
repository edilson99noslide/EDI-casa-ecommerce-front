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
      error?.(response.errors);
    }
  }

  async function logout(
    success?: (data?: any) => void,
    error?: (error: any) => void
  ) {
    const response = await post('/auth/logout');

    if(response.success) {
      success?.(response.data);
    } else {
      error?.(response.errors);
    }
  }

  async function me() {
    await get('/auth/me');
  }

  async function validateTwoFactor(
    code: string,
    success?: (data?: any) => void,
    error?: (error: any) => void
  ){
    const token = localStorage.getItem('token');
    const response = await post('/auth/2fa/validate', { code }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if(response.success) {
      success?.(response.data);
    } else {
      error?.(response.errors);
    }
  }

  return {
    login,
    logout,
    me,
    validateTwoFactor,
  }
}