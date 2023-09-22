<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";

const authStore = useAuthStore();

function logout() {
  authStore
      .logout()
}

</script>

<template>
  <form v-on:submit.prevent="logout">
    <button type="submit" class="btn">Выйти</button>
  </form>

</template>

<style scoped>
form {
  overflow: hidden;
}
</style>