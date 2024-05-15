<template>
  <div>
    <!-- Heading -->
    <div
      v-motion
      :initial="{
        opacity: 0,
      }"
      :visible-once="{
        opacity: 1,
        transition: {
          delay: 200,
          type: 'keyframes',
          ease: 'easeInOut',
        },
      }"
      class="max-xl:mt-20 mb-12 text-center"
    >
      <h3 class="mb-3 text-2xl font-semibold text-white">Other Notable Projects</h3>
      <a href="https://github.com/JoshHaywood?tab=repositories" class="text-primary hover:underline">
        View all projects
      </a>
    </div>

    <!-- Cards -->
    <div class="sm:grid grid-rows-2 grid-cols-2 lg:grid-cols-3 max-sm:space-y-4 gap-4">
      <div v-for="(project, index) in cardProjects" :key="index" class="hover:-translate-y-2 transition-transform">
        <div
          id="project-card"
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 200,
              type: 'keyframes',
              ease: 'easeInOut',
            },
          }"
          class="shadow-lg rounded bg-tertiary"
        >
          <div class="relative h-full sm:h-[350px] md:h-[325px] w-full pt-5 pb-16 px-5 md:pb-5 lg:pb-60">
            <div class="flex justify-between pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                alt="Folder icon"
                class="h-9 w-9 fill-primary hover:cursor-pointer"
                @click="
                  $emit('toggleSidebar');
                  $emit('setProject', project.projectName);
                "
              >
                <path
                  d="M447.1 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.66-64 64v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C511.1 124.7 483.3 96 447.1 96zM463.1 416c0 8.824-7.178 16-16 16h-384c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L255.1 144h192c8.822 0 16 7.176 16 16V416z"
                />
              </svg>

              <!-- Project links -->
              <div class="flex flex-row items-center space-x-2">
                <GithubLink :link="project.repoLink" class="h-5 w-5" />
                <DeployLink :link="project.projectLink" class="h-5 w-5" />
              </div>
            </div>

            <!-- Card text -->
            <div
              class="lg:flex flex-col space-y-4 hover:text-primary hover:cursor-pointer"
              @click="
                $emit('toggleSidebar');
                $emit('setProject', project.projectName);
              "
            >
              <h4 class="mt-5 md:mt-8 font-semibold text-xl text-gray-200 transition-colors">
                {{ project.heading }}
              </h4>

              <p class="text-gray-400">{{ project.description }}</p>
            </div>

            <!-- Technologies list-->
            <ul class="absolute bottom-5 left-5 flex flex-row space-x-5 mt-8">
              <li v-for="(technology, techIndex) in project.technologies" :key="techIndex">
                <div
                  class="text-sm text-gray-500 hover:cursor-pointer"
                  @click="
                    $emit('toggleSidebar');
                    $emit('setProject', project.projectName);
                  "
                >
                  {{ technology.item }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  showSidebar: boolean;
  projects: any[];
}>();
defineEmits(['toggleSidebar', 'setProject']);

// Additional fields specific to cards
const cardFields = [
  {
    description:
      'A website showcasing a curated selection of my projects and providing easy access to my contact information for potential employers.',
    technologies: [
      {
        item: 'React',
      },
      {
        item: 'TailwindCSS',
      },
      {
        item: 'Framer Motion',
      },
    ],
  },
  {
    description:
      'An Ecommerce website that I developed during my research and development dissertation, showcasing standard ecommerce features using a restful API.',
    technologies: [
      {
        item: 'React',
      },
      {
        item: 'Express',
      },
      {
        item: 'MySQL',
      },
    ],
  },
  {
    description:
      'An upgraded version of my previous real-time messaging app, showcasing improvements and new features. The app allows users to exchange messages instantly and interact in real-time.',
    technologies: [
      {
        item: 'Next.js',
      },
      {
        item: 'Express',
      },
      {
        item: 'TypeScript',
      },
    ],
  },
  {
    description:
      'A collaborative project I worked on as part of a group, where we developed a freelancing website to connect clients and freelancers.',
    technologies: [
      {
        item: 'React',
      },
      {
        item: 'Express',
      },
      {
        item: 'mySQL',
      },
    ],
  },
  {
    description:
      'A group project that involved creating a software as a service (SaaS) product utilizing a monthly subscription model.',
    technologies: [
      {
        item: 'React',
      },
      {
        item: 'Express',
      },
      {
        item: 'Sqlite3',
      },
    ],
  },
  {
    description:
      'A statistics tracking tool for Esports, which I led as the project manager, displaying my leadership and interest in the rising Esports industry.',
    technologies: [
      {
        item: 'React',
      },
      {
        item: 'Express',
      },
      {
        item: 'MySQL',
      },
    ],
  },
];

// Combine card fields with projects prop
const cardProjects = props.projects.map((project: any, index: number) => {
  return {
    ...project,
    ...cardFields[index],
  };
});
</script>
