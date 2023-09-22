<template>
  <div>
    <p>Counter: {{ getCount }}</p>
    <button type="button" @click="increment">Increment</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'
import {storeToRefs} from "pinia";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const getCount = computed(() => store.getCount);
    const { increment } = store;

    return { getCount, increment }
  }
})
</script>
<style scoped>

</style>