<template>
  <div
    v-for="(project, index) in cardsData"
    :key="index"
    :class="
      project.alignment === 'right'
        ? `md:flex-row-reverse bg-[url('@/images/portfolio-thumbnail.webp')]`
        : `bg-[url('@/images/tech-terminus-thumbnail.jpg')]`
    "
    class="group md:bg-none bg-center max-md:shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:flex cursor-pointer"
    @click="store.activeProject = project.name"
  >
    <!-- Image -->
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: isMobile ? 0 : 20,
      }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
          ease: 'easeInOut',
        },
      }"
      :class="project.alignment === 'right' ? 'order-2' : 'order-1'"
      class="hidden md:block md:w-3/5 md:relative md:overflow-hidden rounded"
      @click="store.showSidebar = true"
    >
      <div class="group-hover:scale-105 transition">
        <NuxtImg :src="`/images/${project.image}`" :alt="`${project.name} thumbnail`" class="min-w-[650px] h-auto" />
      </div>
    </div>

    <!-- Project information -->
    <div
      v-motion
      :initial="{
        opacity: 0,
        x: isMobile ? 0 : project.alignment === 'right' ? 20 : -20,
      }"
      :visible-once="{
        opacity: 1,
        x: 0,
        transition: {
          delay: 400,
          type: 'keyframes',
          ease: 'easeInOut',
        },
      }"
      :class="project.alignment === 'right' ? 'md:text-right' : 'md:text-left'"
      class="md:w-2/5 md:z-10 p-5 sm:px-5 md:px-0 sm:py-16 md:py-10 max-md:backdrop-brightness-[0.3]"
    >
      <div class="font-normal text-primary" @click="store.showSidebar = true">{{ project.tagline }}</div>
      <div
        class="mb-5 text-3xl font-semibold text-white hover:text-primary transition-colors"
        @click="store.showSidebar = true"
      >
        {{ project.heading }}
      </div>
      <p
        :class="project.alignment === 'right' ? 'md:pl-10 md:pr-5 md:-ml-32' : 'md:pl-5 md:pr-10 md:-mr-32'"
        class="bg-none md:bg-tertiary sm:pt-5 pb-5 md:shadow-md md:rounded text-gray-300"
        @click="store.showSidebar = true"
      >
        {{ project.description }}
      </p>

      <div
        v-motion
        :initial="{
          opacity: 0,
        }"
        :visible-once="{
          opacity: 1,
          transition: {
            delay: isMobile ? 0 : 600,
            type: 'keyframes',
            ease: 'easeInOut',
          },
        }"
      >
        <!-- Technologies -->
        <ul
          :class="project.alignment === 'right' ? 'md:justify-end' : 'md:justify-none'"
          class="flex flex-row flex-wrap gap-x-2.5 sm:gap-x-0 sm:space-x-5 md:mt-5 text-gray-500"
          @click="store.showSidebar = true"
        >
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>

        <!-- Media Icons -->
        <div
          :class="project.alignment === 'right' ? 'md:justify-end' : 'md:justify-start'"
          class="flex flex-row mt-5 space-x-2.5"
        >
          <GithubLink v-if="project.githubLink" :link="project.githubLink" class="h-5 w-5" />
          <DeployLink v-if="project.deployLink" :link="project.deployLink" class="h-5 w-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

const store = useProjectsStore();

const isMobile = useMediaQuery('(max-width: 768px)');

const cardsData = [
  {
    image: 'portfolio-thumbnail.webp',
    name: 'portfolio',
    tagline: 'Portfolio Website',
    heading: 'Portfolio Website',
    description:
      "My portfolio website which includes my latest projects and serves as a point of contact for potential clients and employers, it's constantly updated to reflect my development progress.",
    technologies: ['Handlebars/React', 'ExpressJS', 'NodeJS', 'CSS/Tailwind'],
    githubLink: 'https://github.com/JoshHaywood/portfolio-website',
    deployLink: 'https://www.joshhaywood-portfolio.com/',
    alignment: 'right',
  },
  {
    image: 'tech-terminus-thumbnail.jpg',
    name: 'tech-terminus',
    tagline: 'Ecommerce Website',
    heading: 'Dissertation project',
    description:
      'Artefact A of an A/B test used as part of my scientific study on the impact of interfaces and design on user experiences in web-based applications.',
    technologies: ['React', 'ExpressJS', 'NodeJS', 'Axios', 'MySQL'],
    githubLink: 'https://github.com/JoshHaywood/tech-terminus',
    deployLink: 'http://www.tech-terminus.me/',
    alignment: 'left',
  },
];
</script>
