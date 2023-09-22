<script setup lang="ts">

import {useCommentsStore} from "~/stores/comments";
import {useAuthStore} from "~/stores/auth";

const props = defineProps({
  post_id: {
    type: String,
    required: true,
  },
});

const {post_id} = props

const commentsStore = useCommentsStore()
const authStore = useAuthStore()
interface commentForm {
  post: String;
  text: String;
}

let commentForm: commentForm = {
  post: post_id,
  text: "",
};

function post(e) {
  commentsStore.postComment(commentForm)
      .then((response: any) => {
        commentsStore.getComments(post_id)
      }
  )
  e.target.reset()
}

</script>

<template>
  <div id="comment-form" v-if="authStore.profile.role !== 'anon'">
    <div class="comment">
      <h1>Написать комментарий</h1>
      <form v-on:submit.prevent="post">
        <textarea v-model="commentForm.text" placeholder="Текст..." rows="5" required></textarea>
        <button type="submit" class="btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 15px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input {
  width: 40%;
  font-weight: bold;
}

#comment-form {
  width: 750px;
}

.comment {
  width: 100%;
  padding: 20px;
  background: white;
  margin: 20px 0;
  box-shadow: 10px 10px 30px #CCC;
  border-radius: 10px;
}
</style>