<template>
  <div>
    <div v-show="sidebar" class="fixed top-0 z-40 h-screen w-screen bg-black opacity-70" @click="sidebar = false"></div>

    <Transition name="slide">
      <nav
        v-show="showHeader"
        :class="sidebar ? 'bg-tertiary' : 'bg-transparent'"
        class="fixed top-0 z-40 flex w-full items-center justify-between p-3 backdrop-blur transition-transform lg:px-10"
      >
        <NuxtImg
          v-motion-fade-visible-once
          :src="src"
          alt="Logo"
          class="h-auto w-[200px] px-2 pr-0 hover:cursor-pointer sm:w-[250px] sm:pr-2"
          @mouseenter="src = '/images/logo-hover.png'"
          @mouseleave="src = '/images/logo.png'"
          @click="scrollToTop"
        />

        <button class="absolute right-5 block h-5 w-5 md:hidden" @click="sidebar = !sidebar">
          <div
            :class="sidebar ? 'absolute top-1/2 -translate-y-1/2 rotate-45' : 'absolute top-0'"
            class="h-0.5 w-6 bg-white transition-transform"
          />
          <div
            :class="sidebar ? 'absolute top-1/2 -translate-y-1/2 opacity-0' : 'absolute top-1/2 -translate-y-1/2'"
            class="h-0.5 w-6 bg-white transition-opacity"
          />
          <div
            :class="sidebar ? 'absolute top-1/2 -translate-y-1/2 -rotate-45' : 'absolute bottom-0'"
            class="h-0.5 w-6 bg-white transition-transform"
          />
        </button>

        <NavLinks :sidebar="sidebar" @close="sidebar = false" />
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const src = ref<string>('/images/logo.png');

const sidebar = ref<boolean>(false);
const showHeader = ref<boolean>(true);

const lastScrollY = ref<number>(0);

onMounted(() => {
  window.addEventListener('resize', updateSidebarState);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSidebarState);
  window.removeEventListener('scroll', handleScroll);
});

// Prevent scroll when sidebar is open
watch(sidebar, (newValue) => {
  document.body.style.overflow = newValue ? 'hidden' : 'auto';

  if (newValue) {
    nextTick(() => {
      showHeader.value = true;
    });
  }
});

// Handle scroll behaviours
const handleScroll = () => {
  const newY = window.scrollY;

  // Show header if sidebar is open
  if (sidebar.value) {
    return (showHeader.value = true);
  }

  // Show header if scrolling up
  if (newY < lastScrollY.value) {
    showHeader.value = true;
    // Hide header if scrolling down
  } else if (newY > lastScrollY.value) {
    showHeader.value = false;
  }

  lastScrollY.value = newY;
};

// Scroll to top
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Hide sidebar on larger screens
const updateSidebarState = () => {
  if (window.innerWidth > 640) {
    sidebar.value = false;
  }
};
</script>

<style scoped>
.slide-enter-active {
  transform: translateY(0);
}

.slide-leave-active {
  transform: translateY(-100%);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
