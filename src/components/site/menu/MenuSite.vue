<script setup lang="ts">
import { ShoppingCart, User } from 'lucide-vue-next';

import {Button} from "@/components/ui/button";
</script>

<template>
  <div class="menu-site__content">
    <div class="menu-site__box-logo">
      <img src="/public/logo.png" alt="logo">
    </div>

    <div class="menu-site__box-buttons">
      <router-link to="/">
        <Button
          class="button-router-link w-full px-5"
          size="icon"
          variant="outline"
        >
          Login <User />
        </Button>
      </router-link>

      <router-link to="/">
        <Button
          class="button-router-link w-full px-5"
          size="icon"
          variant="outline"
        >
          Carrinho (0) <ShoppingCart />
        </Button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.menu-site__content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  padding: 10px 15px;

  background: transparent;
  border-bottom: 1px solid var(--color-text-primary);
}

.menu-site__box-logo {
  display: flex;
  align-items: center;

  height: 100%;
  padding-right: 10px;

  border-right: 1px solid var(--color-text-primary);
}

.menu-site__box-logo img {
  width: 100px;
}

.menu-site__box-buttons {
  display: flex;
  align-items: center;
  gap: 10px;

  height: 100%;
  padding-left: 10px;

  border-left: 1px solid var(--color-text-primary);
}

.button-router-link {
  cursor: pointer;
}
</style>