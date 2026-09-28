<template>
  <footer class="border-t border-white/[0.08] bg-secondary">
    <div class="mx-auto max-w-[1100px] px-5 py-8 md:px-10 xl:px-0">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold text-white">Josh Haywood</p>
          <div class="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#7f8798]">
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
          </div>
        </div>

        <button
          type="button"
          class="self-start text-sm font-medium text-[#7f8798] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:self-auto"
          @click="scrollToTop"
        >
          Back to top ↑
        </button>
      </div>

      <p class="mt-7 font-mono text-[0.68rem] text-[#727b8d]">© Josh Haywood {{ new Date().getFullYear() }}</p>
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
