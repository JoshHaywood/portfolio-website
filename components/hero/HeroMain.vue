<template>
  <div class="h-screen flex items-center">
    <BackgroundParticles class="h-screen" />

    <!-- Intro -->
    <div class="absolute lg:max-w-[1100px] lg:left-0 lg:right-0 mx-auto px-5 md:px-10 xl:px-0 space-y-5">
      <section>
        <h1
          v-motion
          :initial="initial()"
          :visible-once="animation(900)"
          class="tracking-wide font-normal text-lg text-primary"
        >
          Hi, my name is
        </h1>
        <h2
          v-motion
          :initial="initial()"
          :visible-once="animation(1100)"
          class="block mt-4 tracking-wide text-4xl sm:text-5xl lg:text-6xl font-semibold text-white"
        >
          Josh Haywood
        </h2>
        <h2
          v-motion
          :initial="initial()"
          :visible-once="animation(1300)"
          class="block mt-4 tracking-wide text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-400"
        >
          A Full-Stack Software Engineer
        </h2>
        <p
          v-motion
          :initial="initial()"
          :visible-once="animation(1500)"
          class="mt-6 tracking-wide text-xl max-w-xl text-gray-400"
        >
          I build high-quality, impactful applications at the
          <a href="https://www.dbsne.com/">
            <span class="font-semibold text-xl text-primary hover:underline">Direct Business Group</span> </a
          >, focused on driving innovation and efficiency in the Energy Sector.
        </p>
      </section>

      <!-- Actions -->
      <div
        v-motion
        :initial="initial()"
        :visible-once="animation(1500)"
        class="flex max-xs:flex-col items-center mt-5 max-xs:space-y-5 xs:space-x-5"
      >
        <a href="https://github.com/JoshHaywood/" class="max-sm:w-full">
          <button
            class="max-sm:w-full mx-auto px-7 py-2 rounded border-4 text-white border-tertiary bg-tertiary transition-colors hover:border-tertiary/30 hover:bg-tertiary/30"
          >
            View my Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/josh-haywood" class="max-sm:w-full">
          <button
            class="max-sm:w-full mx-auto px-6 py-2 rounded border-2 text-white border-primary transition-colors hover:bg-primary/30"
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
      class="absolute bottom-0 mb-2 space-y-1 left-0 right-0 text-center cursor-pointer"
    >
      <button class="font-medium text-xl text-gray-400 hover:text-white transition-colors">View More</button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 w-5 fill-primary mx-auto">
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
