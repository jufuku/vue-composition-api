import { computed, reactive, provide, inject } from '@vue/composition-api';

export const key = Symbol("SharedCounter");

function useCounter(initial = 0) {
    const state = reactive({ count: initial });
    return {
        count: computed(() => state.count),
        increment: () => state.count++,
    };
}

export const provideStore = (num) => {
    provide(key, useCounter(num));
};

export const useStore = () => {
    return inject(key);
};
