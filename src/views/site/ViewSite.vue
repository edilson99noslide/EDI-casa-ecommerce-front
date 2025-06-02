<script setup lang="ts">
  // COMPONENTS
  import {Button} from "@/components/ui/button";
  import MenuSite from "@/components/site/menu/MenuSite.vue";
  import AdminIcon from "@/components/icons/AdminIcon.vue";
</script>

<template>
  <MenuSite />

  <h1 class="text-3xl text-center font-bold mt-2 ml-2">Home page</h1>

  <router-link to="/admin">
    <Button
      class="button-router-link"
      size="icon"
      variant="outline"
    >
      <AdminIcon />
    </Button>
  </router-link>
</template>

<style scoped>
.button-router-link {
  position: fixed;

  bottom: 10px;
  left: 20px;

  background: var(--color-tertiary);
  cursor: pointer;
}
</style>
