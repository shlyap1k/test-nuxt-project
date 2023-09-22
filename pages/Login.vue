<script setup lang="ts">
import LogIn from "~/components/Auth/LoginForm.vue";

definePageMeta({
  middleware: [
    'anon',
  ],
});
</script>

<template>
  <div id="login">
    <log-in/>
  </div>
</template>

<style scoped>
#login {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}
</style>