<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const post = ref(props)
</script>

<template>
  <div class="post">
    <h2>{{post.post.title}}</h2>
    <h3>{{post.post.author}}</h3>
    <p>{{post.post.description}}</p>
  </div>
</template>

<style scoped>
.post {
  width: 100%;
  padding: 20px;
  background: white;
  margin: 20px 0;
  box-shadow: 10px 10px 30px #CCC;
  border-radius: 10px;
}

.post h2 {
  margin-bottom: 5px;
}

.post h3 {
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 0.8em;
  color: #777;
}

.post h3:before {
  content: '@';
}
</style>