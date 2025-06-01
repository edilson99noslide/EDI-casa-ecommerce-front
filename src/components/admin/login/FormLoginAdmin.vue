<script setup lang="ts">
  // COMPONENTS
  import {Label} from "@/components/ui/label";
  import {Input} from "@/components/ui/input";
  import {Button} from "@/components/ui/button";

  // COMPOSABLE
  import {useLoginAction} from '@/composables/actions/admin/login/useLoginAction';

  const { email, password, sendLogin } = useLoginAction();
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center">
    <img src="/public/logo.png" alt="logo do login" class="w-30 h-30">

    <h2>Login</h2>

    <div class="grid w-full mb-5 max-w-sm items-center gap-1.5">
      <Label for="email">E-mail</Label>
      <Input
        v-model="email"
        id="email"
        placeholder="Digite seu E-mail"
        type="text"
      />
    </div>

    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="password">Senha</Label>
      <Input
        v-model="password"
        id="password"
        label="email"
        placeholder="Digite sua senha"
        type="password"
      />
    </div>

    <Button
      variant="default"
      size="lg"
      class="mt-5 cursor-pointer"
      @click="sendLogin"
    >
      Fazer login
    </Button>
  </div>
</template>

<style scoped>

</style>