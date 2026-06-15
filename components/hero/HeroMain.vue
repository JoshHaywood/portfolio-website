<template>
  <div class="flex h-screen items-center">
    <BackgroundParticles class="h-screen" />

    <!-- Intro -->
    <div class="absolute mx-auto space-y-5 px-5 md:px-10 lg:left-0 lg:right-0 lg:max-w-[1100px] xl:px-0">
      <section>
        <h1
          v-motion
          :initial="initial()"
          :visible-once="animation(900)"
          class="text-lg font-normal tracking-wide text-primary"
        >
          Hi, my name is
        </h1>
        <h2
          v-motion
          :initial="initial()"
          :visible-once="animation(1100)"
          class="mt-4 block text-4xl font-semibold tracking-wide text-white sm:text-5xl lg:text-6xl"
        >
          Josh Haywood
        </h2>
        <h2
          v-motion
          :initial="initial()"
          :visible-once="animation(1300)"
          class="mt-4 block text-4xl font-semibold tracking-wide text-gray-400 sm:text-5xl lg:text-6xl"
        >
          A Full-Stack Software Engineer
        </h2>
        <p
          v-motion
          :initial="initial()"
          :visible-once="animation(1500)"
          class="mt-6 max-w-xl text-xl tracking-wide text-gray-400"
        >
          I build high-quality, impactful applications at
          <a href="https://directglobal.com">
            <span class="text-xl font-semibold text-primary hover:underline">Direct Global</span> </a
          >, focused on driving innovation and efficiency in the energy sector.
        </p>
      </section>

      <!-- Actions -->
      <div
        v-motion
        :initial="initial()"
        :visible-once="animation(1500)"
        class="mt-5 flex items-center max-xs:flex-col max-xs:space-y-5 xs:space-x-5"
      >
        <a href="https://github.com/JoshHaywood/" class="max-sm:w-full">
          <button
            class="mx-auto rounded border-4 border-tertiary bg-tertiary px-7 py-2 text-white transition-colors hover:border-tertiary/30 hover:bg-tertiary/30 max-sm:w-full"
          >
            View my GitHub
          </button>
        </a>
        <a href="https://www.linkedin.com/in/josh-haywood" class="max-sm:w-full">
          <button
            class="mx-auto rounded border-2 border-primary px-6 py-2 text-white transition-colors hover:bg-primary/30 max-sm:w-full"
          >
            View my LinkedIn
          </button>
        </a>
      </div>
    </div>

    <!-- Page scroller -->
    <div
      id="view-more"
      v-motion
      :initial="{
        opacity: 0,
      }"
      :visible-once="{
        opacity: 1,
        transition: {
          delay: 1500,
          type: 'keyframes',
          ease: 'easeInOut',
        },
      }"
      class="absolute bottom-0 left-0 right-0 mb-2 cursor-pointer space-y-1 text-center"
    >
      <button class="text-xl font-medium text-gray-400 transition-colors hover:text-white">View More</button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mx-auto h-5 w-5 fill-primary">
        <path
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const initial = () => ({
  opacity: 0,
  y: 100,
});

const animation = (delay: number) => ({
  opacity: 1,
  y: 0,
  transition: {
    delay,
    type: 'keyframes',
    ease: 'easeInOut',
  },
});

onMounted(() => {
  // Scroll down a page when clicking view more
  const viewMoreButton = document.getElementById('view-more');
  viewMoreButton?.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  });
});
</script>
