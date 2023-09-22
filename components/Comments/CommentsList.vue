<script setup lang="ts">
import CommentView from "~/components/Comments/CommentView.vue";
import PostView from "~/components/Posts/PostView.vue";

const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
});

const comments = ref(props);
</script>

<template>
  <div id="comments">
    <div v-for="comment in comments.comments">
      <comment-view :comment="comment"/>
    </div>
  </div>
</template>

<style scoped>

</style>