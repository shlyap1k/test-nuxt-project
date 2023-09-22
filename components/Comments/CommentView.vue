<script setup lang="ts">
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

const comment = ref(props)
</script>

<template>
  <div class="comment">
    <h3>{{comment.comment.author}}</h3>
    <p>{{comment.comment.text}}</p>
  </div>
</template>

<style scoped>
.comment {
  width: 100%;
  padding: 20px;
  background: white;
  margin: 20px 0;
  box-shadow: 10px 10px 30px #CCC;
  border-radius: 10px;
}

.comment h3 {
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 0.8em;
  color: #777;
}

.comment h3:before {
  content: '@';
}
</style>