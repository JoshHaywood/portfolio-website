<template>
  <StatusMessage
    :heading="'Thank you'"
    message="Your message has been sent. I'll get back to you as soon as I can."
    :redirect="'/'"
  />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Message Sent | Josh Haywood',
  robots: 'noindex',
});
</script>
