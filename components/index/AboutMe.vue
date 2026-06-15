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
            I am a Software Engineer at
            <a href="https://directglobal.com" class="font-semibold text-primary hover:underline"> Direct Global, </a>
            where I contribute, as part of a team, to maintaining existing projects and developing new applications. I
            aim to create efficient, scalable, and user-friendly solutions whilst enhancing my skills and technical
            experience. By integrating modern development trends and practices into my work, I strive to solve
            challenges effectively and contribute to the success of our projects and the development of our team.
          </p>

          <p class="text-gray-400">
            I specialise in full-stack web development, using the latest trends and technologies. My current areas of
            focus are
            <span
              class="font-semibold text-primary hover:cursor-pointer hover:underline"
              @click="store.setSidebar('Customer Portal')"
            >
              customer-oriented applications
            </span>
            and creating an automation-driven
            <span
              class="font-semibold text-primary hover:cursor-pointer hover:underline"
              @click="store.setSidebar('Automated CRM System')"
            >
              CRM system.
            </span>
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
const store = useProjectsStore();

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
