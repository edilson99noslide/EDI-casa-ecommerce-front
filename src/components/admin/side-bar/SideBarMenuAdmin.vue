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
  import SideBarFooterAdmin from '@/components/admin/side-bar/SideBarFooterAdmin.vue';

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

  // COMPOSABLE
  import { useUser } from '@/composables/actions/admin/me/useUserAction';

  const { user } = useUser();
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <img
        src="@/assets/admin/images/default-image-user.png"
        alt="Imagem do usuário"
        class="w-15 h-15 border rounded-2xl"
      >
      <div class="border-t mt-3"></div>
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
      <SideBarFooterAdmin
        :user="user"
      />
    </SidebarFooter>
  </Sidebar>
</template>