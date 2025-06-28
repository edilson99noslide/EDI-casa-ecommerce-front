<script setup lang="ts">
  // COMPONENTS
  import CommonDataTable from '@/components/commons/admin/CommonDataTable.vue';
  import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
  import CommonBreadcrumb from '@/components/commons/admin/CommonBreadcrumb.vue';
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
        <CommonDataTable />
      </CardContent>
      <CardHeader>Footer</CardHeader>
    </Card>
  </div>
</template>

<style scoped>

</style>