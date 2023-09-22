<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const router = useRouter();

interface loginForm {
  username: string;
  password: string;
}

let loginForm: loginForm = {
  username: "",
  password: "",
};
function login() {
  authStore
      .login(loginForm)
      .then((_response) => {authStore.getProfile()})
      .catch((error) => console.log("API error", error));
}

</script>

<template>
  <form v-on:submit.prevent="login">
    <input v-model="loginForm.username" type="text" name="username" placeholder="Введите логин" required>
    <input v-model="loginForm.password" type="password" name="password" placeholder="Введите пароль" required>
    <button class="btn" type="submit">Войти</button>
    <NuxtLink class="link" to="register">Нет аккаунта? Зарегистрироваться</NuxtLink>
  </form>
</template>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 10px 10px 30px #CCC;
}

button {
  align-self: center;
  width: 100%;
}

</style>