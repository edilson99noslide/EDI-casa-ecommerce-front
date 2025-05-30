<script setup lang="ts">
  // COMPONENTS
  import { Button } from '@/components/ui/button';
  import SunIcon from '@/components/icons/SunIcon.vue';
  import MoonIcon from '@/components/icons/MoonIcon.vue';

  // COMPOSABLE
  import { useDarkMode } from './composables/useDarkMode';

  const { isDark, toggleDark } = useDarkMode();
</script>

<template>
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
