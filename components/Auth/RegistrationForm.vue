<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

interface registerForm {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

let registerForm: registerForm = {
  username: "",
  password: "",
  firstname: "",
  lastname: ""
};

const authStore = useAuthStore()

function register(e) {
  authStore.signup(registerForm)
  e.target.reset()
}

</script>

<template>
  <form v-on:submit.prevent="register">
    <input v-model="registerForm.username" type="text" name="username" placeholder="Введите логин" required>
    <input v-model="registerForm.password" type="password" name="password" placeholder="Введите пароль" required>
    <input v-model="registerForm.firstname" type="text" name="username" placeholder="Имя" required>
    <input v-model="registerForm.lastname" type="text" name="lastname" placeholder="Фамилия" required>
    <button class="btn" type="submit">Зарегистрироваться</button>
    <NuxtLink class="link" to="Login">Уже зарегестрированы? Войти</NuxtLink>
  </form>
</template>

<style scoped>



</style>