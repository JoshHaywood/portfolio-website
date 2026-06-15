<template>
  <div
    v-for="(project, index) in cardsData"
    :key="index"
    :class="
      project.alignment === 'right'
        ? `bg-[url('/images/industrion-thumbnail.png')] md:flex-row-reverse`
        : `bg-[url('/images/astra-featured-thumbnail.jpg')]`
    "
    class="group cursor-pointer bg-center max-md:shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:flex md:bg-none"
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
      class="hidden rounded md:relative md:block md:w-3/5 md:overflow-hidden"
      @click="store.setSidebar(project.tagline)"
    >
      <div class="transition group-hover:scale-105">
        <NuxtImg :src="`/images/${project.image}`" :alt="`${project.tagline} thumbnail`" class="h-auto min-w-[650px]" />
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
      class="p-5 max-md:backdrop-brightness-[0.3] sm:px-5 sm:py-16 md:z-10 md:w-2/5 md:px-0 md:py-10"
    >
      <div class="font-normal text-primary" @click="store.setSidebar(project.tagline)">{{ project.tagline }}</div>
      <div
        class="mb-5 text-3xl font-semibold text-white transition-colors hover:text-primary"
        @click="store.setSidebar(project.tagline)"
      >
        {{ project.heading }}
      </div>
      <p
        :class="project.alignment === 'right' ? 'md:-ml-32 md:pl-10 md:pr-5' : 'md:-mr-32 md:pl-5 md:pr-10'"
        class="bg-none pb-5 text-gray-300 sm:pt-5 md:rounded md:bg-tertiary md:shadow-md"
        @click="store.setSidebar(project.tagline)"
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
          class="flex flex-row flex-wrap gap-x-2.5 text-gray-500 sm:gap-x-0 sm:space-x-5 md:mt-5"
          @click="store.setSidebar(project.tagline)"
        >
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>

        <!-- Media Icons -->
        <div
          :class="project.alignment === 'right' ? 'md:justify-end' : 'md:justify-start'"
          class="mt-5 flex flex-row space-x-2.5"
        >
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

const cardsData: {
  image: string;
  tagline: string;
  heading: string;
  description: string;
  technologies: string[];
  deployLink?: string;
  alignment: string;
}[] = [
  {
    image: 'portal-featured-thumbnail.jpg',
    tagline: 'Customer Portal',
    heading: 'Industrion',
    description:
      'A centralised platform enabling users to manage energy meters, access key documents, and seamlessly connect with other apps, all designed for clarity and convenience.',
    technologies: ['Vue3', 'Adonis', 'PostgreSQL'],
    deployLink: 'https://portal.industrion.io/',
    alignment: 'right',
  },
  {
    image: 'astra-featured-thumbnail.jpg',
    tagline: 'Automated CRM System',
    heading: 'Astra',
    description:
      'A CRM built to streamline lead generation and customer management through AI-driven automation, enabling sales teams to focus on client interaction and building relationships.',
    technologies: ['Vue3', 'GraphQL', 'Hasura'],
    alignment: 'left',
  },
];
</script>
