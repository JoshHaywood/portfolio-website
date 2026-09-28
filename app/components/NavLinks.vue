<template>
  <div>
    <div class="hidden items-center gap-8 md:flex">
      <ul class="flex items-center gap-7">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="text-sm font-medium text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            @click.prevent="scrollTo(link.id)"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <a
        href="/documents/josh-haywood-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-lg border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-white transition-[border-color,background-color,transform] hover:border-primary/60 hover:bg-primary/10 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        View CV
      </a>
    </div>

    <Transition name="mobile-menu">
      <div
        v-if="sidebar"
        id="mobile-navigation"
        class="fixed inset-x-0 top-16 min-h-[calc(100dvh-4rem)] border-t border-white/10 bg-secondary px-5 pb-8 pt-7 shadow-2xl md:hidden"
      >
        <ul class="space-y-1">
          <li v-for="link in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="block rounded-lg px-3 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              @click.prevent="handleNavigation(link.id)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <a
          href="/documents/josh-haywood-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition-[border-color,background-color,transform] hover:border-primary/60 hover:bg-primary/10 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          @click="$emit('close')"
        >
          View CV
        </a>
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

const links: { id: string; name: string }[] = [
  { id: 'projects', name: 'Work' },
  { id: 'about', name: 'About' },
  { id: 'contact', name: 'Contact' },
];

const handleNavigation = (id: string) => {
  scrollTo(id);
  emit('close');
};
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: none;
  }
}
</style>
