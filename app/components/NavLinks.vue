<template>
  <div class="relative">
    <div class="hidden items-center space-x-2.5 md:flex">
      <a
        href="/documents/josh-haywood-cv.pdf"
        target="_blank"
        class="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span
          v-motion-fade-visible-once
          :initial="{
            opacity: 0,
            y: -20,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
          }"
          class="inline-block rounded border-2 border-primary bg-primary/30 p-2 text-sm font-semibold text-white transition-colors hover:bg-transparent"
        >
          View my CV
        </span>
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
        >
          <a
            :href="`#${link.id}`"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            @click.prevent="scrollTo(link.id)"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>

    <Transition>
      <div
        v-if="sidebar"
        id="mobile-navigation"
        class="fixed right-0 mt-6 flex h-screen w-[280px] flex-col items-center bg-tertiary pt-40 transition md:hidden"
      >
        <ul class="flex flex-col space-y-10">
          <li
            v-for="link in links"
            :key="link.id"
            class="ml-2.5 text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:text-primary"
          >
            <a
              :href="`#${link.id}`"
              class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              @click.prevent="handleNavigation(link.id)"
            >
              {{ link.name }}
            </a>
          </li>

          <li>
            <a
              href="/documents/josh-haywood-cv.pdf"
              target="_blank"
              class="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span
                class="inline-block rounded border-2 border-primary bg-primary/30 p-2 text-sm font-semibold text-white transition-colors hover:bg-transparent"
              >
                View my CV
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { scrollTo } = useScrollTo();

defineProps<{
  sidebar: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const handleNavigation = (id: string) => {
  scrollTo(id);
  emit('close');
};

const links: { id: string; name: string }[] = [
  { id: 'about', name: 'About' },
  { id: 'capabilities', name: 'Capabilities' },
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
