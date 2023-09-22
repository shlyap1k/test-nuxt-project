<script setup lang="ts">
import {usePostsStore} from "~/stores/posts";
import {useCommentsStore} from "~/stores/comments";
import CommentForm from "~/components/Comments/CommentForm.vue";
import PostView from "~/components/Posts/PostView.vue";

const route = useRoute()
const postsStore = usePostsStore()
const commentsStore = useCommentsStore()
const post_id = route.params.id
await postsStore.getPost(post_id)
await commentsStore.getComments(post_id)

</script>

<template>
  <div id="post">
    <post-view :post="postsStore.post"/>
  </div>
  <h1>Комментарии ({{commentsStore.comments.length}})</h1>
  <div id="comments">
    <comments-list :comments="commentsStore.comments"/>
    <comment-form :post_id="post_id"/>
  </div>
</template>

<style scoped>
#post {
  width: 750px;
}

#comments {
  width: 750px;
}
</style>