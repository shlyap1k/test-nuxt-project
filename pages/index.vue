<script setup lang="ts">
import { usePostsStore } from "~/stores/posts";

const postsStore = usePostsStore()
await postsStore.getPosts()
console.log("posts:", postsStore.posts)
</script>

<template>
  <posts-list :posts="postsStore.posts"/>
</template>

<style scoped>
#posts {
  width: 750px;
}

.post {
  width: 100%;
  padding: 20px;
  background: white;
  margin: 20px 0;
  box-shadow: 10px 10px 30px #CCC;
  border-radius: 10px;
}

.post h2 {
  margin-bottom: 20px;
}
</style>