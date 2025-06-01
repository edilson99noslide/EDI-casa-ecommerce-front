<script setup lang="ts">
  // COMPONENTS
  import {Button} from "@/components/ui/button";
  import WebSiteIcon from "@/components/icons/WebSiteIcon.vue";
  import LoginAdmin from "@/components/admin/login/LoginAdmin.vue";
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center box-login">
    <router-link to="/">
      <Button
        class="button-router-link"
        size="icon"
        variant="outline"
      >
        <WebSiteIcon />
      </Button>
    </router-link>

    <LoginAdmin class="w-full h-full p-3" />
  </div>
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