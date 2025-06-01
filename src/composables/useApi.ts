import { ref } from 'vue';

import axios, { AxiosError } from 'axios';

// TYPE
import type { AxiosRequestConfig } from 'axios';

// Tipagem para erro padrão de API
type ApiError = {
  message: string;
  errors?: Record<string, string[]>;
};

const API_BASE_URL = 'http://localhost:8000/api';

export function useApi() {
  const loading = ref(false);
  const errors = ref<ApiError | null>(null);

  const request = async <T = any>(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<{ success: boolean; data: T | null; errors: ApiError | null }> => {
    loading.value = true;
    errors.value = null;

    try {
      const response = await axios({
        method,
        url: `${API_BASE_URL}${endpoint}`,
        data,
        withCredentials: true, // importante para cookies (ex: JWT)
        ...config,
      });

      return {
        success: true,
        data: response.data,
        errors: null,
      };
    } catch (err) {
      const axiosError = err as AxiosError;

      const errorData = axiosError.response?.data as ApiError;

      const fallback: ApiError = {
        message: axiosError.message || 'Erro desconhecido',
      };

      errors.value = errorData || fallback;

      return {
        success: false,
        data: null,
        errors: errorData || fallback,
      };
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    errors,
    get: <T = any>(endpoint: string, config?: AxiosRequestConfig) =>
      request<T>('get', endpoint, null, config),

    post: <T = any>(endpoint: string, body?: any, config?: AxiosRequestConfig) =>
      request<T>('post', endpoint, body, config),

    put: <T = any>(endpoint: string, body?: any, config?: AxiosRequestConfig) =>
      request<T>('put', endpoint, body, config),

    del: <T = any>(endpoint: string, config?: AxiosRequestConfig) =>
      request<T>('delete', endpoint, null, config),
  };
}
