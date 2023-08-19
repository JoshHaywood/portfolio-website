import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);

  const increment = () => {
    count.value++;
  };

  return { count, increment };
});
