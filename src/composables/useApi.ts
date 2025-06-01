// composables/useApi.ts
import { ref } from 'vue';

// TYPE
import type { AxiosRequestConfig } from 'axios';

import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export function useApi() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const request = async <T = any>(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<{ success: boolean; data: T | null; error: string | null }> => {
    loading.value = true
    error.value = null

    try {
      const response = await axios({
        method,
        url: `${API_BASE_URL}${endpoint}`,
        data,
        withCredentials: true, // importante para enviar cookie JWT
        ...config,
      })

      return {
        success: true,
        data: response.data,
        error: null,
      }
    } catch (err) {
      const axiosError = err as AxiosError
      const message = axiosError.message || 'Erro desconhecido'

      error.value = message
      return {
        success: false,
        data: null,
        error: message,
      }
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    get: <T = any>(endpoint: string, config?: AxiosRequestConfig) =>
      request<T>('get', endpoint, null, config),

    post: <T = any>(endpoint: string, body?: any, config?: AxiosRequestConfig) =>
      request<T>('post', endpoint, body, config),

    put: <T = any>(endpoint: string, body?: any, config?: AxiosRequestConfig) =>
      request<T>('put', endpoint, body, config),

    del: <T = any>(endpoint: string, config?: AxiosRequestConfig) =>
      request<T>('delete', endpoint, null, config),
  }
}
