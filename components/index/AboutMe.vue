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
            I am a recent graduate from
            <a href="https://www.falmouth.ac.uk" class="font-semibold text-primary hover:underline">
              Falmouth University </a
            >with a BSc in Web Development. Located in Devon, England, my main interests lie in front-end, full-stack,
            and user interface development and design. Recently, I have been focusing on creating full-stack RESTful
            APIs with React, Node.js, and TypeScript hosted on the cloud. Additionally, I have been actively marketing
            myself through my portfolio site and CV."
          </p>

          <p class="text-gray-400">
            I make use of the latest web development trends and technologies, and I am always looking for new ways to
            improve my skills. One of my standout achievements is creating an
            <span class="font-semibold text-primary hover:underline hover:cursor-pointer">e-commerce site</span>
            as part of a mixed-method study into UX and UI design, and creating a
            <span class="font-semibold text-primary hover:underline hover:cursor-pointer">
              real-time messaging system
            </span>
            , both of which received high praise from my peers and instructors.
          </p>
        </div>

        <!-- Technologies list -->
        <div class="space-y-5">
          <div class="font-normal text-gray-400">Technologies I have been using recently:</div>

          <div class="grid grid-cols-1 gap-4 xs:grid-cols-3 xs:gap-10 px-5 pt-1 pb-5 bg-tertiary">
            <ul v-for="(techGroup, index) in technologies" :key="index">
              <li
                v-for="(technology, techIndex) in techGroup.listColumn"
                :key="techIndex"
                class="flex flex-row mt-5 mb-1 space-x-2.5"
              >
                <div class="overflow-hidden inline-block mt-[0.175rem]">
                  <div class="h-2 w-2 bg-primary rotate-45 transform origin-top-left"></div>
                </div>

                <span class="text-sm font-normal text-gray-400">{{ technology.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Developer picture-->
      <div
        class="xs:min-w-[275px] sm:min-w-[300px] relative top-14 md:top-3 max-sm:right-3 border-2 border-primary rounded"
      >
        <NuxtImg
          src="/images/portrait.webp"
          alt="Developer"
          class="w-full relative rounded bottom-3 right-3 hover:bottom-0 hover:right-0 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies: any = [
  {
    listColumn: [{ label: 'React' }, { label: 'NextJS' }, { label: 'SASS' }],
  },
  {
    listColumn: [{ label: 'TailwindCSS' }, { label: 'TypeScript' }, { label: 'Node.js' }],
  },
  {
    listColumn: [{ label: 'Web Sockets' }, { label: 'Express' }, { label: 'Heroku' }],
  },
];
</script>
