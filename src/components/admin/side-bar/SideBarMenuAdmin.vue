<script setup lang="ts">
  // COMPONENTS
  import { ShoppingCart, Home, Box, Users, Settings } from 'lucide-vue-next';
  import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from '@/components/ui/sidebar';

  const items = [
    {
      title: "Início",
      url: "#",
      icon: Home,
    },
    {
      title: "Pedidos",
      url: "#",
      icon: ShoppingCart,
    },
    {
      title: "Produtos",
      url: "#",
      icon: Box,
    },
    {
      title: "Clientes",
      url: "#",
      icon: Users,
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings,
    },
  ];
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <img
        src="/public/logo.png"
        alt="logo do site"
        class="w-30 h-30"
      >
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navegue por</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{item.title}}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      Footer
    </SidebarFooter>
  </Sidebar>
</template>