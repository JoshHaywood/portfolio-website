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
                @click="(store.activeProject = project.projectName), (store.showSidebar = true)"
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
              @click="(store.activeProject = project.projectName), (store.showSidebar = true)"
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
                  @click="(store.activeProject = project.projectName), (store.showSidebar = true)"
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
const store = useProjectsStore();

// Additional fields specific to cards
const cardFields = [
  {
    description:
      'Enabling users to access and monitor their energy meters and sales data through a centralised platform designed for ease of use and efficiency.',
    technologies: [
      {
        item: 'Vue3',
      },
      {
        item: 'Adonis',
      },
      {
        item: 'PostgreSQL',
      },
    ],
  },
  {
    description:
      'A CRM developed with a focus on AI and automation, reducing the workload for sales teams and improving lead generation processes.',
    technologies: [
      {
        item: 'Vue3',
      },
      {
        item: 'GraphQL',
      },
      {
        item: 'Hasura',
      },
    ],
  },
  {
    description:
      'A real-time auction platform enabling suppliers to bid on meters, with live data facilitating efficient communication between staff and customers.',
    technologies: [
      {
        item: 'Vue3',
      },
      {
        item: 'Socket.io',
      },
      {
        item: 'TypeScript',
      },
    ],
  },
  {
    description:
      'A portfolio site showcasing my projects, providing easy access to contact information for potential enquiries.',
    technologies: [
      {
        item: 'NuxtJS',
      },
      {
        item: 'TailwindCSS',
      },
      {
        item: 'TypeScript',
      },
    ],
  },
  {
    description:
      'An Ecommerce site developed for my research dissertation, implementing standard ecommerce features using a RESTful API.',
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
      'An upgraded real-time messaging app, featuring new functionalities and improvements for instant communication.',
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
];

// Combine card fields with store projects
const cardProjects = store.projects.map((project: any, index: number) => {
  return {
    ...project,
    ...cardFields[index],
  };
});
</script>
