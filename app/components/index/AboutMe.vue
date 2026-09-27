<template>
  <div>
    <!-- Heading -->
    <SectionHeading heading="About Me" />

    <!-- Section -->
    <div class="max-mb:pb-12 flex flex-col items-center justify-between max-lg:space-x-10 md:flex-row md:items-start">
      <div class="flex flex-col space-y-5 md:w-2/3">
        <!-- Background information -->
        <div class="flex w-full flex-col space-y-4 leading-7">
          <p class="text-gray-400">
            Over the last few years, I’ve progressed from contributing individual features to taking responsibility for
            larger areas of delivery and ongoing systems. I enjoy taking work from a real requirement through to a
            shipped feature: understanding what people need, working through the technical problem and writing the code
            to deliver it.
          </p>

          <p class="text-gray-400">
            My work has ranged from
            <span
              role="button"
              tabindex="0"
              class="font-semibold text-primary hover:cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              @click="openProject('customer-portal')"
              @keydown.enter="openProject('customer-portal')"
              @keydown.space.prevent="openProject('customer-portal')"
            >
              customer-facing applications
            </span>
            to internal tools such as an automation-driven
            <span
              role="button"
              tabindex="0"
              class="font-semibold text-primary hover:cursor-pointer hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              @click="openProject('sales-crm')"
              @keydown.enter="openProject('sales-crm')"
              @keydown.space.prevent="openProject('sales-crm')"
            >
              CRM system.
            </span>
            That has included working directly with stakeholders, picking up unfamiliar technologies and moving across
            different parts of a system.
          </p>
        </div>

        <!-- Technologies list -->
        <div class="space-y-5">
          <div class="font-normal text-gray-400">Technologies I have been using recently:</div>

          <div class="grid grid-cols-1 bg-tertiary px-5 pb-5 pt-1 xs:grid-cols-3">
            <ul v-for="(technology, index) in technologies" :key="index">
              <li class="mb-1 mt-5 flex flex-row space-x-2.5">
                <div class="mt-[0.175rem] inline-block overflow-hidden">
                  <div class="h-2 w-2 origin-top-left rotate-45 transform bg-primary"></div>
                </div>

                <span class="text-sm font-normal text-gray-400">{{ technology }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Developer picture-->
      <div class="relative top-14 w-[275px] rounded border-2 border-primary max-sm:right-3 sm:w-[300px] md:top-3">
        <NuxtImg
          v-motion
          :initial="{ x: 12, y: 12 }"
          :visible-once="{
            x: 0,
            y: 0,
            transition: {
              delay: 400,
              type: 'keyframes',
              ease: 'easeInOut',
            },
          }"
          src="/images/portrait.webp"
          alt="Developer"
          class="relative bottom-3 right-3 w-full rounded transition-all hover:bottom-0 hover:right-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { openProject } = useProjectSidebar();

const technologies: string[] = [
  'TypeScript',
  'Vue 3',
  'Node.js',
  'AdonisJS',
  'PostgreSQL',
  'GraphQL',
  'Hasura',
  'Socket.IO',
  'Git',
];
</script>
