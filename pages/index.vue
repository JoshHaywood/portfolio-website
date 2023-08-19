<template>
  <div>
    Count: {{ counter.count }}
    <button class="bg-primary" @click="counter.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
</script>
