<template>
  <div>
    <h2>provide&inject(子)</h2>
    <div>子：{{ count }}</div>
    <div @click="increment">カウント</div>
  </div>
</template>

<script>

import { useStore } from '@/miniStore/counter';

export default {
  name: 'ProvideInjectChild',
  setup() {
    return useStore();
  },
};
</script>
