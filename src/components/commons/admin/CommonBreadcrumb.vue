<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// COMPONENTS
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'


const route = useRoute();

// Computa as rotas "ancestrais" da rota atual
const breadcrumbs = computed(() => {
  return route.matched
    .filter(route => route.meta?.title) // Só rotas que definiram um título
    .map(route => ({
      title: route.meta.title as string,
      path: route.path.includes(':') ? '' : route.path, // Ignora rotas com params dinâmicos
    }))
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-for="(breadCrumb, index) in breadcrumbs" :key="index">
        <template v-if="index !== breadcrumbs.length - 1">
          <BreadcrumbLink>
            <router-link :to="breadCrumb.path">
              {{ breadCrumb.title }}
            </router-link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </template>
        <template v-else>
          <BreadcrumbPage>{{ breadCrumb.title }}</BreadcrumbPage>
        </template>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
