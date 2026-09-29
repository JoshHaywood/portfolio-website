<template>
  <section class="border-t border-white/[0.08] pt-12 sm:pt-14">
    <div class="mb-8 flex items-end justify-between gap-6">
      <h3 class="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">More projects</h3>

      <a
        href="https://github.com/JoshHaywood?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex shrink-0 text-sm font-medium text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        GitHub ↗
      </a>
    </div>

    <div class="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      <button
        v-for="project in projects"
        :key="project.id"
        type="button"
        class="group relative grid w-full gap-2 py-5 pl-4 pr-12 text-left transition-colors hover:bg-white/[0.02] active:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary sm:grid-cols-[minmax(180px,0.75fr)_minmax(280px,1.4fr)_minmax(190px,auto)_20px] sm:items-center sm:gap-6 sm:px-2 sm:pr-2"
        @click="openProject(project.id)"
      >
        <span class="font-semibold text-white transition-colors group-hover:text-primary">{{ project.heading }}</span>
        <span class="text-sm leading-6 text-gray-400">{{ project.tagline }}</span>
        <span class="font-mono text-[0.68rem] text-[#8d95a6] sm:text-right">
          {{ project.technologies.join(' · ') }}
        </span>
        <span
          aria-hidden="true"
          class="absolute right-4 top-5 text-sm text-[#8d95a6] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white motion-reduce:transition-none sm:static sm:inline"
        >
          →
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { secondaryProjects } from '~/data/projects';

const { openProject } = useProjectDetail();
const projects = secondaryProjects;
</script>
