<script setup lang="ts">
  // COMPONENTS
  import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
  import SideBarMenuAdmin from '@/components/admin/side-bar/SideBarMenuAdmin.vue';
</script>

<template>
  <SidebarProvider class="flex h-screen w-screen">
    <SideBarMenuAdmin />
    <main class="flex-1 p-4 overflow-y-auto">
      <SidebarTrigger />
      <router-view />
    </main>
  </SidebarProvider>
</template>

<style scoped>

</style>