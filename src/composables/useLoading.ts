import { ref } from 'vue';

const isLoading = ref<boolean>(false);

export function useLoading() {

  function show() {
    isLoading.value = true;
  }

  function hide() {
    isLoading.value = false;
  }

  return {
    isLoading,
    show,
    hide,
  };
}