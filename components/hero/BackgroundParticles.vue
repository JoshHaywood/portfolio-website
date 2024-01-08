<template>
  <NuxtParticles id="hero-particles" :options="options" />
</template>

<script setup lang="ts">
const options: any = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      outModes: 'bounce',
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.25,
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
};
</script>
