<script setup lang="ts">

import FormLoginAdmin from '@/components/admin/login/FormLoginAdmin.vue';
</script>

<template>
  <div class="h-full login-admin__content">
    <div class="w-1/2 h-full flex flex-col justify-center items-center login-admin__box-inputs">
      <FormLoginAdmin />
    </div>

    <div class="w-1/2 login-admin__box-image">
      <img src="/imagem_do_login.png" alt="Imagem do login" />
    </div>
  </div>
</template>

<style scoped>
.login-admin__content {
  display: flex;
  align-items: center;
}
</style>