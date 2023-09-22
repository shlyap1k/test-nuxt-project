<script setup lang="ts">
import PostView from "~/components/Posts/PostView.vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const posts = ref(props);

</script>

<template>
  <div id="posts">
    <div v-for="post in posts.posts">
      <NuxtLink :to="'post/'+post._id">
        <post-view :post="post"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#posts {
  width: 750px;
  display: flex;
  flex-direction: column-reverse;
}

.post {
  scale: 1;
  transition: 0.2s;
}

.post:hover {
  animation-name: increase;
  animation-duration: 0.2s;
  transform: scale(1.1);
}

@keyframes increase {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

</style>