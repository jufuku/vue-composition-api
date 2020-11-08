<template>
  <div>
    <h2>Composition API（Composition Function）</h2>
    <div>{{ count }}</div>
    <div @click="increment">カウント</div>
  </div>
</template>

<script>

import { reactive, computed } from '@vue/composition-api';

function useCounter(props, context) {
  const state = reactive({
    count: computed({
      get: () => props.countNum,
      set: (val) => context.emit('update:countNum', val),
    }),
  });
  return {
    count: computed(() => state.count),
    increment: () => state.count++,
  };
}

export default {
  props: {
    countNum: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    const counter = useCounter(props, context);
    return { ...counter };
  },
};
</script>
