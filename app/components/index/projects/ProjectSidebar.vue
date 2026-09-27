<template>
  <div v-if="activeProject">
    <div class="fixed left-0 h-screen w-screen bg-black opacity-40" @click="closeProject()"></div>

    <div class="fixed bottom-0 right-0 top-0 h-screen w-full overflow-y-scroll bg-secondary p-5 sm:w-[550px] sm:p-10">
      <!-- Navigation -->
      <div class="flex flex-row justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="h-6 w-6 cursor-pointer text-gray-400 transition-colors hover:text-primary"
          @click="closeProject()"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <!-- Media Icons -->
        <div class="flex flex-row items-center space-x-2">
          <GithubLink v-if="activeProject.repoLink" :link="activeProject.repoLink" class="h-5 w-5" />
          <DeployLink v-if="activeProject.deployLink" :link="activeProject.deployLink" class="h-5 w-5" />
        </div>
      </div>

      <!-- Project details -->
      <div class="mt-16">
        <h1 class="text-2xl font-bold tracking-wide text-primary">{{ activeProject.heading }}</h1>
        <div class="mt-2 text-gray-400">{{ activeProject.tagline }}</div>

        <div class="mt-6 overflow-hidden rounded-lg">
          <div class="max-h-[250px] transition-transform hover:scale-105">
            <img :src="`/images/${activeProject.projectImage}`" alt="Project picture" class="w-full cursor-pointer" />
          </div>
        </div>

        <h2 class="mt-6 text-lg font-semibold text-white">Overview</h2>
        <p class="mt-2 text-gray-400">{{ activeProject.overview }}</p>

        <h3 class="mt-6 text-lg font-semibold text-white">Technologies</h3>
        <div class="mt-1 flex flex-wrap">
          <div
            v-for="technology in activeProject.structure"
            :key="technology"
            class="mr-2 mt-2 rounded bg-tertiary p-2 text-sm text-gray-400"
          >
            {{ technology }}
          </div>
        </div>

        <h4 class="mt-6 text-lg font-semibold text-white">Role</h4>
        <p class="mt-2 text-gray-400">{{ activeProject.role }}</p>

        <a v-if="activeProject.deployLink" :href="activeProject.deployLink">
          <button
            class="mt-6 w-full rounded bg-tertiary p-3 text-sm text-white transition-colors hover:bg-tertiary/70 hover:underline"
          >
            View Project
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projectsById } from '~/data/projects';

const { isOpen, activeProjectId, closeProject } = useProjectSidebar();

const activeProject = computed(() => {
  if (!activeProjectId.value) {
    return undefined;
  }

  return projectsById[activeProjectId.value];
});

// Disable scroll if sidebar is open
watch(
  isOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },
);
</script>
