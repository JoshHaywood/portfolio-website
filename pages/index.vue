<template>
  <div>
    <div class="mt-40">
      Count: {{ counter.count }}
      <button class="bg-primary" @click="counter.increment">Increment</button>
    </div>
    <div class="mt-[1000px]">
      Count: {{ counter.count }}
      <button class="bg-primary" @click="counter.increment">Increment</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>
