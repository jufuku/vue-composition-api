<template>
  <div>
    <h2>Composition API（setup関数）</h2>
    <div>{{ count }}</div>
    <div @click="increment">カウント</div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from '@vue/composition-api';

export default {
  props: {
    countNum: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    const state = reactive({
      count: computed({
        get: () => props.countNum,
        set: (val) => context.emit('update:countNum', val),
      }),
    });
    const increment = () => state.count++;

    return {
      ...toRefs(state),
      increment,
    };
  },
};
</script>
