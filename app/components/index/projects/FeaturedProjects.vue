<template>
  <div class="space-y-16 lg:space-y-20">
    <article
      v-for="project in projects"
      :key="project.id"
      class="border-b border-white/[0.08] pb-16 last:border-b-0 last:pb-0"
    >
      <div
        class="grid items-center gap-8 md:gap-10 lg:gap-14 xl:gap-16"
        :class="
          project.id === 'sales-administration-platform'
            ? 'lg:grid-cols-[minmax(0,1fr)_minmax(330px,440px)]'
            : 'lg:grid-cols-[minmax(330px,440px)_minmax(0,1fr)]'
        "
      >
        <div
          class="max-w-[620px]"
          :class="project.id === 'sales-administration-platform' ? 'lg:order-2 lg:justify-self-end' : ''"
        >
          <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
            {{ project.tagline }}
          </p>

          <h3 class="mt-3 text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl">
            {{ project.heading }}
          </h3>

          <p class="mt-5 max-w-[480px] text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
            {{ project.summary }}
          </p>

          <p class="mt-5 max-w-[520px] font-mono text-[0.72rem] leading-5 text-[#8d95a6] sm:text-xs">
            <span class="font-sans font-semibold text-gray-300">{{ featuredRoles[project.id] }}</span>
            <span aria-hidden="true" class="mx-2 text-gray-700">·</span>
            {{ project.technologies.join(' · ') }}
          </p>

          <button
            type="button"
            class="group mt-6 inline-flex items-center gap-1.5 border-b-2 border-primary pb-1 text-sm font-semibold text-white transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            @click="openProject(project.id)"
          >
            Read case study
            <span
              aria-hidden="true"
              class="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </button>
        </div>

        <div :class="project.id === 'sales-administration-platform' ? 'lg:order-1' : ''">
          <button
            type="button"
            class="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-secondary p-1.5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-colors hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-2"
            :aria-label="`Read ${project.heading} case study`"
            @click="openProject(project.id)"
          >
            <NuxtImg
              :src="`/images/${project.projectImage}`"
              :alt="projectMediaAlt(project.id, project.heading)"
              width="1400"
              loading="lazy"
              :class="projectMediaClass(project.id)"
              class="w-full rounded-lg bg-white object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.008] motion-reduce:transition-none"
            />
          </button>

          <p v-if="project.id === 'energy-data-platform'" class="mt-3 text-xs leading-5 text-[#8d95a6]">
            Downstream customer-facing application using consumption data processed by the platform.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { featuredProjects } from '~/data/projects';

const { openProject } = useProjectSidebar();
const projects = featuredProjects;

const featuredRoles: Record<string, string> = {
  'energy-data-platform': 'Later became sole developer',
  'sales-administration-platform': 'Built first usable MVP as sole developer',
};

const projectMediaAlt = (projectId: string, heading: string) =>
  projectId === 'energy-data-platform'
    ? 'Customer-facing application using consumption data processed by the Energy Data Platform'
    : `${heading} application screenshot`;

const projectMediaClass = (projectId: string) =>
  projectId === 'sales-administration-platform'
    ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/9] sm:object-top'
    : 'aspect-[4/3] sm:aspect-[16/10]';
</script>
