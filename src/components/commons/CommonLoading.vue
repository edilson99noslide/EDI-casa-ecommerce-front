<script setup lang="ts">
  import 'ldrs/ring';

  defineProps<{
    visible: boolean
  }>();
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-black/50 flex items-center justify-center z-50"
  >
    <l-ring
      size="40"
      stroke="5"
      speed="2"
      color="#097251"
    />
  </div>
</template>

<style scoped>

</style>