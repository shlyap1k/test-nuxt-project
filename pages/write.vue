<script setup lang="ts">
import { usePostsStore } from "~/stores/posts";
import PostForm from "~/components/Posts/PostForm.vue";

definePageMeta({
  middleware: [
    'auth',
  ],
});

const postsStore = usePostsStore()
postsStore.getPosts()
</script>

<template>
  <post-form/>
  <posts-list :posts="postsStore.posts"/>
</template>

<style scoped>

</style>