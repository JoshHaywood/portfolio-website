<template>
  <footer class="border-t border-white/[0.08] bg-secondary">
    <div
      class="mx-auto flex max-w-[1100px] flex-col gap-4 px-5 py-7 text-sm text-[#7f8798] sm:flex-row sm:items-center sm:justify-between md:px-10 xl:px-0"
    >
      <p class="font-mono text-[0.68rem]">© {{ new Date().getFullYear() }} Josh Haywood</p>

      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href="https://www.linkedin.com/in/josh-haywood"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/JoshHaywood"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          GitHub ↗
        </a>

        <button
          type="button"
          class="font-medium transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          @click="scrollToTop"
        >
          Back to top ↑
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core';

const preferredMotion = usePreferredReducedMotion();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: preferredMotion.value === 'reduce' ? 'auto' : 'smooth',
  });
};
</script>
