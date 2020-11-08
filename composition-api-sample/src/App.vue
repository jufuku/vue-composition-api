<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <div>初期値：{{ count }}</div>
    <Sample1 :count-num.sync="count" />
    <Sample2 :count-num.sync="count" />
    <Sample3 :count-num.sync="count" />
    <ProvideInjectParent :count-num.sync="count" />
  </div>
</template>

<script>
import Sample1 from '@/components/Sample1.vue';
import Sample2 from '@/components/Sample2.vue';
import Sample3 from '@/components/Sample3.vue';
import ProvideInjectParent from '@/components/ProvideInjectParent.vue';

export default {
  name: 'App',
  components: {
    Sample1,
    Sample2,
    Sample3,
    ProvideInjectParent,
  },
  data: () => ({
    num: 10,
  }),
  computed: {
    count: {
      get() {
        return this.num;
      },
      set(value) {
        this.num = value;
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
