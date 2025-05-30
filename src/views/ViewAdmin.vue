<script setup lang="ts">
  // COMPONENTS
  import {Button} from "@/components/ui/button";
  import WebSiteIcon from "@/components/icons/WebSiteIcon.vue";
  import LoginAdmin from "@/components/admin/login/LoginAdmin.vue";
</script>

<template>
  <router-link to="/">
    <Button
      class="button-router-link"
      size="icon"
      variant="outline"
    >
      <WebSiteIcon />
    </Button>
  </router-link>

  <h1 class="text-3xl text-center font-bold mt-2 ml-2">Bem-vindo(a) ao painel</h1>

  <LoginAdmin class="w-full p-3" />
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