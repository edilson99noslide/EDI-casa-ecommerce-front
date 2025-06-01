<script setup lang="ts">
  // COMPONENTS
  import {Input} from "@/components/ui/input";
  import {Label} from "@/components/ui/label";
  import {Button} from "@/components/ui/button";
  import {ref} from "vue";

  const email = ref<string>('');
  const password = ref<string>('');
  const sendForm = ref<boolean>(false);

  function sendLogin() {
    sendForm.value = !sendForm.value;
  };
</script>

<template>
  <div class="h-full login-admin__content">
    <div class="w-1/2 h-full flex flex-col justify-center items-center login-admin__box-inputs">
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

    <div class="w-1/2 login-admin__box-image">
      <img src="/public/Imagem do login.png" alt="Imagem do login" />
    </div>
  </div>
</template>

<style scoped>
.login-admin__content {
  display: flex;
  align-items: center;
}
</style>