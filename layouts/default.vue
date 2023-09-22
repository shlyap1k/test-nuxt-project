<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import {watch} from 'vue';
import LogOutButton from "~/components/Auth/LogOutButton.vue";

const authStore = useAuthStore();
const router = useRouter();

function isEmpty(obj: object) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

function setCurrentPage(page_id: string) {
  if (typeof window !== 'undefined') {
    const current = window.document.getElementsByClassName("current")
    if (typeof current[0] !== 'undefined') {
      current[0].classList.remove("current")
    }
    const new_current = window.document.getElementById(route.name)
    new_current.classList.add("current")
  }
}

if (authStore.profile.role === 'anon') {
  authStore.getProfile()
}

const route = useRoute()
watch(() => route.name, () => {
  setCurrentPage(route.name)
})
</script>

<template>
<!--  <slot />-->
  <div id="nav-bar">
    <div id="head">
      <div id="logo">
        logo
      </div>
      <div id="sitename">
      </div>
      <div id="username" v-if="authStore.profile.role !== 'anon'">
        <p>{{authStore.profile.username}}</p>
        <div id="menu">
          <log-out-button/>
        </div>
      </div>
    </div>
    <nav>
      <ul id="navigation">
        <li id="write" class="menu-option">
          <NuxtLink to="/write">Написать пост</NuxtLink>
        </li>
        <li id="index" class="menu-option">
          <NuxtLink to="/">Посты</NuxtLink>
        </li>
        <li id="users" class="menu-option">
          <NuxtLink to="/users">Пользователи</NuxtLink>
        </li>
        <li id="Login" class="menu-option">
          <NuxtLink to="/login">Войти</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>


</template>

<style scoped>

#menu {
  //height: 0;
  overflow: hidden;
  visibility: hidden;
  //opacity: 0;
  //height: 150px;
  transition: visibility 2s, opacity 2s, height 2s;
  font-size: 1rem;
  background: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  top: 25px;
  position: fixed;
  height: 0;
}

#username:hover #menu {
  //height: 180px;
  visibility: visible;
  //opacity: 1;
  height: 150px;
}

#username::after {
  content: "";
  display: inline-block;
  //border: 10px;
  border-top: 10px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  //background: white;
}

#head {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  font-size: 1.5rem;
  width: 100%;
}

#sitename {
  //align-self: center;
  //padding: 0 calc((750px - 28rem) / 1.5);
  text-align: center;
  width: 100%;
}

#logo {
  //width: 100%;
  //width: calc(100% - 750px);
  //text-align: left;
  padding-right: calc(((100% - 750px) / 2) - 4em);
  margin-left: 20px;
}

#username {
  position: relative;
  padding-left: calc(((100% - 750px) / 2) - 5.5em);
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
}

#menu {
  position: absolute;
  //visibility: hidden;
}



#nav-bar {
  width: 100%;
  height: 100px;
  background: #333333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //gap: 25px;
}

#navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.2rem;
}

#navigation li, a {
  padding: 15px;
}

#navigation li {
  padding: 15px 0px;
}

#navigation a:hover {
  background: #666666;
}

.current {
  //background: #666666;
  border-bottom: solid 10px #999;
}

</style>