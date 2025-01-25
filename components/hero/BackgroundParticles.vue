<template>
  <NuxtParticles id="hero-particles" :options="options" />
</template>

<script setup lang="ts">
const options: {
  fullScreen: { enable: boolean; zIndex: number };
  particles: {
    color: { value: string };
    links: { color: string; distance: number; enable: boolean; opacity: number; width: number };
    move: { enable: boolean; outModes: string };
    number: { density: { enable: boolean }; value: number };
    opacity: { value: number };
    size: { value: { min: number; max: number } };
  };
} = {
  fullScreen: {
    enable: false,
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
