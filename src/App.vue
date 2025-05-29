<script setup lang="ts">
  // COMPONENTS
  import HomePage from './components/HomePage.vue';
  import { Button } from '@/components/ui/button';

  // COMPOSABLE
  import { useDarkMode } from './composables/useDarkMode';
  import SunIcon from "@/components/icons/SunIcon.vue";
  import MoonIcon from "@/components/icons/MoonIcon.vue";

  const { isDark, toggleDark } = useDarkMode();
</script>

<template>
  <Button
    class="mt-2 ml-2 button-toggle-dark"
    size="icon"
    variant="outline"
    @click="toggleDark()"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-if="!isDark" />
  </Button>
  <HomePage />
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
