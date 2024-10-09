<template>
  <div>
    <!-- Heading -->
    <SectionHeading heading="About Me" />

    <!-- Section -->
    <div class="flex flex-col md:flex-row justify-between items-center md:items-start max-lg:space-x-10 max-mb:pb-12">
      <div class="md:w-2/3 flex flex-col space-y-5">
        <!-- Background information -->
        <div class="flex flex-col space-y-4 w-full leading-7">
          <p class="text-gray-400">
            I am a Software Engineer at
            <a href="https://www.dbsne.com/" class="font-semibold text-primary hover:underline">
              Direct Business Group,
            </a>
            where I contribute, as part of a team, to maintaining existing projects and developing new applications. I
            aim to create efficient, scalable, and user-friendly solutions whilst enhancing my skills and technical
            experience. By integrating modern development trends and practices into my work, I strive to solve
            challenges effectively and contribute to the success of our projects and the development of our team.
          </p>

          <p class="text-gray-400">
            I specialize in full-stack web development, utilizing the latest trends and technologies. My current areas
            of focus are
            <span class="font-semibold text-primary hover:underline hover:cursor-pointer">
              customer-oriented applications
            </span>
            and creating an automation-driven
            <span class="font-semibold text-primary hover:underline hover:cursor-pointer">CRM system.</span>
          </p>
        </div>

        <!-- Technologies list -->
        <div class="space-y-5">
          <div class="font-normal text-gray-400">Technologies I have been using recently:</div>

          <div class="grid grid-cols-1 xs:grid-cols-3 px-5 pt-1 pb-5 bg-tertiary">
            <ul v-for="(technology, index) in technologies" :key="index">
              <li class="flex flex-row mt-5 mb-1 space-x-2.5">
                <div class="overflow-hidden inline-block mt-[0.175rem]">
                  <div class="h-2 w-2 bg-primary rotate-45 transform origin-top-left"></div>
                </div>

                <span class="text-sm font-normal text-gray-400">{{ technology }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Developer picture-->
      <div class="w-[275px] sm:w-[300px] relative top-14 md:top-3 max-sm:right-3 border-2 border-primary rounded">
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
          class="w-full relative rounded bottom-3 right-3 hover:bottom-0 hover:right-0 transition-all"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies: string[] = [
  'React',
  'Express',
  'Web Sockets',
  'Vue3',
  'Adonis',
  'Node.js',
  'TypeScript',
  'GraphQL',
  'PostgreSQL',
];
</script>
