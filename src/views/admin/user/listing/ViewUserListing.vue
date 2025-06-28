<script setup lang="ts">
  // COMPONENTS
  import CommonListingTable from '@/components/commons/admin/CommonListingTable.vue';

  // COMPOSABLE
  import useUserListingAction from '@/composables/views/admin/user/listing/useUserListingAction';

  const { rows, headers } = useUserListingAction();
</script>

<template>
  <CommonListingTable
    title="Listagem de usuários"
    description="Gerencie os usuários do painel"
    :columns="headers"
    :rows="rows"
  />
</template>

<style scoped>

</style>