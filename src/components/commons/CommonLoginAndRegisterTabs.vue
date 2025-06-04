<script setup lang="ts">
  // COMPONENTS
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { Tabs, TabsContent, TabsList, TabsTrigger, } from '@/components/ui/tabs';
  import {
    PinInput,
    PinInputGroup,
    PinInputSlot,
  } from '@/components/ui/pin-input';

  // COMPOSABLES
  import { useLoginAction } from '@/composables/actions/admin/auth/useLoginAction';
  import { useRegisterAction } from '@/composables/actions/admin/auth/useRegisterAction';

  const { emailLogin, passwordLogin, twoFactorRequired, codeTwoFA, sendLogin, sendTwoFactor } = useLoginAction();
  const {
    nameRegister,
    emailRegister,
    passwordRegister,
    passwordConfirmationRegister,
    sendRegister
  } = useRegisterAction();
</script>

<template>
  <!-- Login e cadastro -->
  <Tabs v-if="!twoFactorRequired" default-value="login" class="w-[400px]">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger
        value="login"
        class="cursor-pointer
          data-[state=active]:bg-[var(--color-primary)]
          data-[state=active]:text-[var(--color-bg)]
          dark:data-[state=active]:bg-[var(--color-primary)]
          dark:data-[state=active]:text-[var(--color-text-primary)]"
      >
        Login
      </TabsTrigger>
      <TabsTrigger
        value="register"
        class="cursor-pointer
          data-[state=active]:bg-[var(--color-primary)]
          data-[state=active]:text-[var(--color-bg)]
          dark:data-[state=active]:bg-[var(--color-primary)]
          dark:data-[state=active]:text-[var(--color-text-primary)]"
      >
        Cadastro
      </TabsTrigger>
    </TabsList>

    <!-- Sessão auth -->
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Digite suas credenciais para acessar o painel administrador.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="email">E-mail</Label>
            <Input id="email" v-model="emailLogin" />
          </div>
          <div class="space-y-1 mt-5">
            <Label for="password">Senha</Label>
            <Input id="password" type="password" v-model="passwordLogin" />
          </div>
        </CardContent>

        <CardFooter>
          <Button
            class="cursor-pointer text-white"
            @click="sendLogin()"
          >
            Fazer login
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <!-- Sessão cadastro -->
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Registrar</CardTitle>
          <CardDescription>
            Digite suas informações para se cadastrar no painel administrador.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="name">Nome</Label>
            <Input id="name" v-model="nameRegister" />
          </div>
          <div class="space-y-1 mt-5">
            <Label for="new">E-mail</Label>
            <Input id="new" v-model="emailRegister" />
          </div>
          <div class="space-y-1 mt-5">
            <Label for="new">Senha</Label>
            <Input id="new" type="password" v-model="passwordRegister" />
          </div>
          <div class="space-y-1 mt-5">
            <Label for="new">Confirmar senha</Label>
            <Input id="new" type="password" v-model="passwordConfirmationRegister" />
          </div>
        </CardContent>

        <CardFooter>
          <Button
            class="cursor-pointer text-white"
            @click="sendRegister()"
          >
            Fazer cadastro
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>

  <!-- Validar 2FA -->
  <PinInput
    v-else
    id="pin-input"
    v-model="codeTwoFA"
    placeholder="-"
    @complete="sendTwoFactor(String(codeTwoFA.join('')))"
  >
    <PinInputGroup>
      <PinInputSlot
        v-for="(id, index) in 6"
        :key="id"
        :index="index"
      />
    </PinInputGroup>
  </PinInput>
</template>

<style scoped>

</style>