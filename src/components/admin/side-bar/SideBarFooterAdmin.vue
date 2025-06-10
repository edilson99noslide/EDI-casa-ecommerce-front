<script setup lang="ts">
  // COMPONENTS
  import { ChevronsUpDown } from 'lucide-vue-next';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';

  // COMPOSABLE
  import { useLogoutAction } from '@/composables/actions/admin/auth/useLogoutAction';

  const { logoutUser } = useLogoutAction();

  defineProps<{
    user: any;
  }>();
</script>

<template>
  <div>
    <div class="border-t mb-3"></div>

    <div class="w-full">
      <p class="text-base font-bold">{{ user.name }}</p>

      <div class="flex justify-between">
        <span class="text-sm">{{ user.email }}</span>

        <DropdownMenu>
          <!-- Botão para abrir dropdown do usuário -->
          <DropdownMenuTrigger>
            <ChevronsUpDown class="w-5" />
          </DropdownMenuTrigger>

          <!-- Dropdown do usuário -->
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem
              @click="logoutUser"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>