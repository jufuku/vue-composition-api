<template>
  <div>
    <h2>provide&inject(親)</h2>
    <div>親：{{ count }}</div>
    <div @click="increment">カウント</div>
    <ProvideInjectChild />
  </div>
</template>

<script>

import { provideStore, useStore } from '@/miniStore/counter';
import ProvideInjectChild from '@/components/ProvideInjectChild.vue';

export default {
  name: 'ProvideInjectParent',
  components: {
    ProvideInjectChild,
  },
  props: {
    countNum: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    provideStore(props.countNum);
    return useStore();
  },
};
</script>
