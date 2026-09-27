<template>
  <h2
    class="relative mb-12 inline-block text-4xl font-semibold tracking-wide text-white before:absolute before:left-0 before:top-12 before:w-3/5 before:border-t-2 before:border-t-primary"
  >
    {{ props.heading }}
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  heading: string;
}>();
</script>
