<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      :class="
        isScrolled || sidebar
          ? 'border-white/10 bg-secondary/95 shadow-[0_10px_35px_rgba(0,0,0,0.18)]'
          : 'border-transparent bg-secondary/70'
      "
      class="border-b backdrop-blur-xl transition-colors duration-200 motion-reduce:transition-none"
    >
      <div class="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-5 md:h-[72px] md:px-10 xl:px-0">
        <button
          type="button"
          aria-label="Back to top"
          class="inline-flex h-10 w-12 items-center justify-start text-white transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          @click="scrollToTop"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 38 30"
            class="h-[30px] w-[38px] md:h-8 md:w-[41px]"
          >
            <path
              d="M5 5 H15 M15 5 V19 C15 23.8 12.4 26 8.1 26 C5.8 26 4 25.3 2.8 24.1 M22 5 V26 M22 15 H34 M34 5 V26 M15 15 H22"
              fill="none"
              stroke="currentColor"
              stroke-width="3.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          :aria-expanded="sidebar"
          aria-controls="mobile-navigation"
          :aria-label="sidebar ? 'Close navigation' : 'Open navigation'"
          class="relative ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
          @click="sidebar = !sidebar"
        >
          <span class="sr-only">{{ sidebar ? 'Close navigation' : 'Open navigation' }}</span>
          <div class="relative h-4 w-5">
            <span
              :class="sidebar ? 'top-1.5 rotate-45' : 'top-0'"
              class="absolute left-0 h-px w-5 bg-white transition-all duration-200 motion-reduce:transition-none"
            />
            <span
              :class="sidebar ? 'opacity-0' : 'opacity-100'"
              class="absolute left-0 top-1.5 h-px w-5 bg-white transition-opacity duration-200 motion-reduce:transition-none"
            />
            <span
              :class="sidebar ? 'top-1.5 -rotate-45' : 'top-3'"
              class="absolute left-0 h-px w-5 bg-white transition-all duration-200 motion-reduce:transition-none"
            />
          </div>
        </button>

        <NavLinks :sidebar="sidebar" @close="sidebar = false" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core';

const preferredMotion = usePreferredReducedMotion();

const sidebar = ref<boolean>(false);
const isScrolled = ref<boolean>(false);

onMounted(() => {
  updateHeaderState();
  window.addEventListener('resize', updateSidebarState);
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSidebarState);
  window.removeEventListener('scroll', updateHeaderState);
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});

watch(sidebar, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

const updateHeaderState = () => {
  isScrolled.value = window.scrollY > 16;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && sidebar.value) {
    sidebar.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: preferredMotion.value === 'reduce' ? 'auto' : 'smooth',
  });
};

const updateSidebarState = () => {
  if (window.innerWidth >= 768) {
    sidebar.value = false;
  }
};
</script>
