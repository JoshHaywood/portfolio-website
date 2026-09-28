<template>
  <section class="border-t border-white/[0.08] pt-12 sm:pt-14">
    <div class="mb-8 sm:flex sm:items-end sm:justify-between">
      <div>
        <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">More professional work</p>
        <h3 class="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">Additional production systems</h3>
      </div>

      <a
        href="https://github.com/JoshHaywood?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-flex text-sm font-medium text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:mt-0"
      >
        GitHub ↗
      </a>
    </div>

    <div class="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      <button
        v-for="project in projects"
        :key="project.id"
        type="button"
        class="group grid w-full gap-2 py-5 text-left transition-colors hover:bg-white/[0.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary sm:grid-cols-[minmax(180px,0.75fr)_minmax(280px,1.4fr)_auto] sm:items-center sm:gap-6 sm:px-2"
        @click="openProject(project.id)"
      >
        <span class="font-semibold text-white transition-colors group-hover:text-primary">{{ project.heading }}</span>
        <span class="text-sm leading-6 text-gray-400">{{ project.tagline }}</span>
        <span class="font-mono text-[0.68rem] text-[#7f8798] sm:text-right">
          {{ project.technologies.join(' · ') }}
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { secondaryProjects } from '~/data/projects';

const { openProject } = useProjectSidebar();
const projects = secondaryProjects;
</script>
