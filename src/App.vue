<script setup lang="ts">
  // COMPONENT
  import HomePage from './components/HomePage.vue';

  // COMPOSABLE
  import { useDarkMode } from './composables/useDarkMode';

  const { isDark, toggleDark } = useDarkMode();
</script>

<template>
  <button
    @click="toggleDark()"
  >
    {{ isDark ? 'Alterar para claro' : 'Alterar para escuro' }}
  </button>
  <HomePage />
</template>

<style scoped>
body {
  transition: background-color 0.3s, color 0.3s;
}
</style>
