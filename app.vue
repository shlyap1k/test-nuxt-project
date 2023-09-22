<template>
  <div id="layout">
    <NuxtLayout/>
  </div>
  <div id="app">
    <NuxtPage />
  </div>
</template>
<script setup>
import MyCounter from "~/components/MyCounter.vue";
import "~/assets/css/reset.css";
import "~/assets/css/pages.css";
import "~/assets/css/components.css"
import LogIn from "~/components/Auth/LoginForm.vue";
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>