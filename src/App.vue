<script setup lang="ts">
  // COMPONENTS
  import { Button } from '@/components/ui/button';
  import { Toaster } from 'vue-sonner';
  import SunIcon from '@/components/icons/SunIcon.vue';
  import MoonIcon from '@/components/icons/MoonIcon.vue';
  import CommonLoading from '@/components/commons/CommonLoading.vue';

  // COMPOSABLE
  import { useDarkMode } from './composables/useDarkMode';
  import { useLoading } from '@/composables/useLoading';

  const { isDark, toggleDark } = useDarkMode();
  const { isLoading } = useLoading();
</script>

<template>
  <Toaster
    position="bottom-right"
    class="!fixed !bottom-15 !right-5 z-[9999] flex flex-col-reverse space-y-2"
    rich-colors
  />

  <router-view />

  <Button
    class="mt-2 ml-2 button-toggle-dark"
    size="icon"
    variant="outline"
    @click="toggleDark()"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-if="!isDark" />
  </Button>

  <CommonLoading :visible="isLoading" />
</template>

<style scoped>
.button-toggle-dark {
  position: fixed;

  bottom: 10px;
  right: 20px;

  background: var(--color-tertiary);
  cursor: pointer;
}
</style>
