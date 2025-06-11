import { defineStore } from 'pinia';

import { useApi } from '@/composables/useApi'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
  }),
  actions: {
    async fetchUser() {
      if (this.user) return this.user;

      this.loading = true;
      const api = useApi();
      const { data, errors } = await api.get('/auth/me');
      this.loading = false;

      if (!errors) {
        this.user = data;
        localStorage.setItem('user', JSON.stringify(data));
        return data;
      } else {
        this.user = null;
        localStorage.removeItem('user');
        throw new Error('Não autenticado');
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
    }
  }
})
