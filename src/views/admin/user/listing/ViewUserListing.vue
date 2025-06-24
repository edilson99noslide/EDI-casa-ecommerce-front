<script setup lang="ts">
  // COMPONENT
  import CommonBreadcrumb from '@/components/commons/admin/CommonBreadcrumb.vue';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
</script>

<template>
  <div class="w-full h-250 p-5 flex justify-center">
    <Card class="w-full h-full">
      <CardHeader>
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição</CardDescription>
        <CommonBreadcrumb />
      </CardHeader>
      <CardContent>
        Listagem de usuários
      </CardContent>
      <CardHeader>Footer</CardHeader>
    </Card>
  </div>
</template>

<style scoped>

</style>