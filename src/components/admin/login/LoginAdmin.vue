<script setup lang="ts">
  // COMPONENT
  import CommonLoginAndRegisterTabs from '@/components/commons/CommonLoginAndRegisterTabs.vue';
  import {useDispositive} from "@/composables/useDispositive.ts";

  const { isMobile } = useDispositive();
</script>

<template>
  <div class="h-full login-admin__content">
    <div :class="[
      'h-full flex flex-col justify-center items-center',
      !isMobile ? 'w-1/2' : 'w-full'
      ]"
    >
      <CommonLoginAndRegisterTabs />
    </div>

    <div v-if="!isMobile" class="w-1/2 login-admin__box-image">
      <img v-if="!isMobile" src="/imagem_do_login.png" alt="Imagem do login" />
    </div>
  </div>
</template>

<style scoped>
.login-admin__content {
  display: flex;
  align-items: center;
}
</style>