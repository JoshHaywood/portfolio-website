<template>
  <div v-if="activeProject" class="fixed inset-0 z-[60]">
    <div aria-hidden="true" class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeProject" />

    <article
      ref="dialogRef"
      tabindex="-1"
      class="absolute inset-0 overflow-y-auto overscroll-contain bg-secondary outline-none md:inset-5 md:rounded-2xl md:border md:border-white/10 md:shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:inset-8 xl:left-1/2 xl:right-auto xl:w-[min(1320px,calc(100vw-5rem))] xl:-translate-x-1/2"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`project-${activeProject.id}-title`"
    >
      <div class="sticky top-0 z-20 border-b border-white/[0.08] bg-secondary/95 backdrop-blur-xl">
        <div class="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-5 md:px-8">
          <button
            type="button"
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            @click="closeProject"
          >
            <span aria-hidden="true">←</span>
            Back to work
          </button>

          <div class="flex items-center gap-4">
            <a
              v-if="activeProject.repoLink"
              :href="activeProject.repoLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Source ↗
            </a>

            <a
              v-if="activeProject.deployLink"
              :href="activeProject.deployLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-10 items-center rounded-lg border border-white/15 bg-white/[0.03] px-4 text-sm font-semibold text-white transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Open project ↗
            </a>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-[1160px] px-5 pb-20 pt-10 md:px-8 md:pb-24 md:pt-14 lg:pt-16">
        <header class="max-w-[820px]">
          <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
            {{ activeProject.tagline }}
          </p>

          <h1
            :id="`project-${activeProject.id}-title`"
            class="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            {{ activeProject.heading }}
          </h1>

          <p class="mt-5 max-w-[760px] text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            {{ activeProject.summary }}
          </p>
        </header>

        <div class="mt-9 overflow-hidden rounded-xl border border-white/10 bg-tertiary p-1.5 sm:mt-12 sm:p-2">
          <NuxtImg
            :src="`/images/${activeProject.projectImage}`"
            :alt="projectMediaAlt"
            width="1400"
            :class="projectMediaClass"
            class="w-full rounded-lg bg-white object-cover object-left-top sm:object-top"
          />
        </div>

        <p
          v-if="activeProject.id === 'energy-data-platform'"
          class="mt-3 text-xs leading-5 text-[#8d95a6]"
        >
          Downstream customer-facing application using consumption data processed by the platform.
        </p>

        <div class="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(250px,0.5fr)] lg:gap-16">
          <div class="space-y-12">
            <section>
              <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">Overview</p>
              <p class="mt-4 max-w-[760px] text-base leading-7 text-gray-300 sm:leading-8">
                {{ activeProject.overview }}
              </p>
            </section>

            <section>
              <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">My role</p>
              <p class="mt-4 max-w-[760px] text-base leading-7 text-gray-300 sm:leading-8">
                {{ activeProject.role }}
              </p>
            </section>
          </div>

          <aside class="border-t border-white/[0.08] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">Technologies</p>
            <ul class="mt-4 space-y-2 font-mono text-xs text-gray-400">
              <li v-for="technology in activeProject.structure" :key="technology" class="border-b border-white/[0.06] pb-2">
                {{ technology }}
              </li>
            </ul>

            <div v-if="activeProject.deployLink || activeProject.repoLink" class="mt-8 border-t border-white/[0.08] pt-7">
              <p class="text-sm leading-6 text-[#7f8798]">Related links</p>
              <div class="mt-3 flex flex-col items-start gap-3">
                <a
                  v-if="activeProject.deployLink"
                  :href="activeProject.deployLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Open project ↗
                </a>
                <a
                  v-if="activeProject.repoLink"
                  :href="activeProject.repoLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  View source ↗
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { projectsById } from '~/data/projects';

const { isOpen, activeProjectId, closeProject } = useProjectSidebar();

const dialogRef = ref<HTMLElement>();
let previouslyFocusedElement: HTMLElement | null = null;

const activeProject = computed(() => {
  if (!activeProjectId.value) {
    return undefined;
  }

  return projectsById[activeProjectId.value];
});

const projectMediaAlt = computed(() =>
  activeProject.value?.id === 'energy-data-platform'
    ? 'Customer-facing application using consumption data processed by the Energy Data Platform'
    : `${activeProject.value?.heading ?? 'Project'} application screenshot`,
);

const projectMediaClass = computed(() =>
  activeProject.value?.id === 'sales-administration-platform'
    ? 'aspect-[4/3] sm:aspect-[16/8]'
    : 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/9]',
);

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) {
    return;
  }

  if (event.key === 'Escape') {
    closeProject();
    return;
  }

  if (event.key !== 'Tab' || !dialogRef.value) {
    return;
  }

  const focusable = Array.from(dialogRef.value.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) => !element.hasAttribute('disabled') && element.offsetParent !== null,
  );

  if (!focusable.length) {
    event.preventDefault();
    dialogRef.value.focus();
    return;
  }

  const first = focusable.at(0);
  const last = focusable.at(-1);

  if (!first || !last) {
    return;
  }

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

watch(isOpen, async (isProjectOpen) => {
  if (!import.meta.client) {
    return;
  }

  document.body.style.overflow = isProjectOpen ? 'hidden' : '';

  if (isProjectOpen) {
    previouslyFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    await nextTick();
    dialogRef.value?.scrollTo({ top: 0, behavior: 'auto' });
    dialogRef.value?.focus();
  } else {
    previouslyFocusedElement?.focus();
    previouslyFocusedElement = null;
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);

  if (import.meta.client) {
    document.body.style.overflow = '';
  }
});
</script>
