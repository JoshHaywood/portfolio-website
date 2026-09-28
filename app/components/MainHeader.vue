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
          class="inline-flex items-center text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-base"
          @click="scrollToTop"
        >
          <span>J</span><span class="text-primary">H</span>
        </button>

        <button
          type="button"
          :aria-expanded="sidebar"
          aria-controls="mobile-navigation"
          :aria-label="sidebar ? 'Close navigation' : 'Open navigation'"
          class="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
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
