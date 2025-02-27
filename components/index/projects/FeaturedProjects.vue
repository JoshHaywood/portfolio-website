<template>
  <div
    v-for="(project, index) in cardsData"
    :key="index"
    :class="
      project.alignment === 'right'
        ? `md:flex-row-reverse bg-[url('../images/industrion-thumbnail.png')]`
        : `bg-[url('../images/astra-thumbnail.jpg')]`
    "
    class="group md:bg-none bg-center max-md:shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:flex cursor-pointer"
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
      @click="store.setSidebar(project.tagline)"
    >
      <div class="group-hover:scale-105 transition">
        <NuxtImg :src="`/images/${project.image}`" :alt="`${project.tagline} thumbnail`" class="min-w-[650px] h-auto" />
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
      <div class="font-normal text-primary" @click="store.setSidebar(project.tagline)">{{ project.tagline }}</div>
      <div
        class="mb-5 text-3xl font-semibold text-white hover:text-primary transition-colors"
        @click="store.setSidebar(project.tagline)"
      >
        {{ project.heading }}
      </div>
      <p
        :class="project.alignment === 'right' ? 'md:pl-10 md:pr-5 md:-ml-32' : 'md:pl-5 md:pr-10 md:-mr-32'"
        class="bg-none md:bg-tertiary sm:pt-5 pb-5 md:shadow-md md:rounded text-gray-300"
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
          class="flex flex-row flex-wrap gap-x-2.5 sm:gap-x-0 sm:space-x-5 md:mt-5 text-gray-500"
          @click="store.setSidebar(project.tagline)"
        >
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>

        <!-- Media Icons -->
        <div
          :class="project.alignment === 'right' ? 'md:justify-end' : 'md:justify-start'"
          class="flex flex-row mt-5 space-x-2.5"
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
