<template>
  <div>
    <h2>Options API</h2>
    <div>{{ count }}</div>
    <div @click="increment">カウント</div>
  </div>
</template>

<script>
export default {
  props: {
    countNum: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    count: {
      get: function () {
        return this.countNum;
      },
      set: function (val) {
        this.$emit('update:countNum', val);
      },
    },
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
