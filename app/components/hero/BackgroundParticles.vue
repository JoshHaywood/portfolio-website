<template>
  <ClientOnly>
    <vue-particles v-if="showParticles" id="hero-particles" :options="options" />
  </ClientOnly>
</template>

<script setup lang="ts">
import type { ISourceOptions } from '@tsparticles/engine';
import { usePreferredReducedMotion } from '@vueuse/core';

const preferredMotion = usePreferredReducedMotion();

const showParticles = computed(() => preferredMotion.value !== 'reduce');

const options: ISourceOptions = {
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
