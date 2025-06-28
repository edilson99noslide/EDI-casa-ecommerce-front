<script setup lang="ts">
  // TYPE
  import type { CommonListingTable } from "@/types/admin/commons/commonListingTable/commonListingTable.type";

  // COMPONENTS
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
  import CommonDataTable from '@/components/commons/admin/CommonDataTable.vue';
  import CommonBreadcrumb from '@/components/commons/admin/CommonBreadcrumb.vue';
  import CommonPagination from '@/components/commons/admin/CommonPagination.vue';

  // PROPS
  defineProps<CommonListingTable>();
</script>

<template>
  <div class="w-full h-250 p-5">
    <Card class="w-full h-full relative">
      <CardHeader>
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
        <CommonBreadcrumb />
      </CardHeader>
      <CardContent>
        <CommonDataTable
          :columns="columns"
          :rows="rows"
        />
      </CardContent>
      <CardFooter class="absolute bottom-10 right-0 flex justify-end w-full">
        <span class="absolute left-10 text-sm text-muted-foreground">Listando 10 itens</span>
        <CommonPagination />
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped>

</style>