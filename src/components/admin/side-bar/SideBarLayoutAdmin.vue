<script setup lang="ts">
  // COMPONENTS
  import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
  import SideBarMenuAdmin from '@/components/admin/side-bar/SideBarMenuAdmin.vue';
</script>

<template>
  <SidebarProvider>
    <SideBarMenuAdmin />
    <main>
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>