<script setup lang="ts">

import {usePostsStore} from "~/stores/posts";

const postsStore = usePostsStore()
interface postForm {
  title: string;
  description: string;
}

let postForm: postForm = {
  title: "",
  description: "",
};

function post(e) {
  postsStore.postPost(postForm).then(response => {
      postsStore.getPosts()
    }
  )
  e.target.reset()
  // window.document.getElementById("post-form").reset()
}

</script>

<template>
  <div id="post-form">
    <div class="post">
      <h1>Написать новый пост</h1>
      <form v-on:submit.prevent="post">
        <input ref="title" v-model="postForm.title" type="text" name="title" placeholder="Название..." required>
        <textarea v-model="postForm.description" placeholder="Текст..." rows="30" required></textarea>
        <button type="submit" class="btn">Опубликовать</button>
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

#post-form {
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
</style>