<template>
  <div class="relative">
    <div class="hidden items-center space-x-2.5 md:flex">
      <a href="/documents/josh-haywood-cv.pdf" target="_blank">
        <button
          v-motion-fade-visible-once
          :initial="{
            opacity: 0,
            y: -20,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
          }"
          class="mx-auto rounded border-2 border-primary bg-primary/30 p-2 text-sm font-semibold text-white transition-colors hover:bg-transparent"
        >
          View my CV
        </button>
      </a>

      <ul class="flex space-x-5">
        <li
          v-for="(link, index) in links"
          :key="link.id"
          v-motion
          :initial="{
            opacity: 0,
            y: -20,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200 + index * 200,
              type: 'keyframes',
              ease: 'easeInOut',
            },
          }"
          class="ml-2.5 text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:text-primary"
          @click="useScrollTo().scrollTo(link.id)"
        >
          {{ link.name }}
        </li>
      </ul>
    </div>

    <Transition>
      <div
        v-if="sidebar"
        class="fixed right-0 mt-6 flex h-screen w-[280px] flex-col items-center bg-tertiary pt-40 transition md:hidden"
      >
        <ul class="flex flex-col space-y-10">
          <li
            v-for="link in links"
            :key="link.id"
            class="ml-2.5 text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:text-primary"
            @click="useScrollTo().scrollTo(link.id), $emit('close')"
          >
            {{ link.name }}
          </li>

          <a href="/documents/josh-haywood-cv.pdf" target="_blank">
            <button
              class="mx-auto rounded border-2 border-primary bg-primary/30 p-2 text-sm font-semibold text-white transition-colors hover:bg-transparent"
            >
              View my CV
            </button>
          </a>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sidebar: boolean;
}>();
defineEmits(['close']);

const links: { id: string; name: string }[] = [
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];
</script>

<style scoped>
.v-enter-active {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(100%);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
