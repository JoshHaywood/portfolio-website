<template>
  <h2
    class="mb-12 inline-block relative font-semibold text-4xl tracking-wide before:w-3/5 before:absolute before:left-0 before:top-12 before:border-t-2 before:border-t-primary text-white"
  >
    {{ props.heading }}
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
});
</script>
