<template>
  <div v-if="store.activeProject">
    <div class="fixed left-0 h-screen w-screen opacity-40 bg-black" @click="store.showSidebar = false"></div>

    <div class="fixed top-0 bottom-0 right-0 w-full h-screen sm:w-[550px] p-5 sm:p-10 overflow-y-scroll bg-secondary">
      <!-- Navigation -->
      <div class="flex flex-row justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors"
          @click="store.showSidebar = false"
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
            <NuxtImg :src="activeProject.projectImage" alt="Project picture" class="w-full cursor-pointer" />
          </div>
        </div>

        <h2 class="mt-6 text-lg font-semibold text-white">Overview</h2>
        <p class="mt-2 text-gray-400">{{ activeProject.overview }}</p>

        <h3 class="mt-6 text-lg font-semibold text-white">Technologies</h3>
        <div class="flex flex-wrap mt-1">
          <div
            v-for="technology in activeProject.structure"
            :key="technology"
            class="mt-2 mr-2 p-2 text-sm rounded text-gray-400 bg-tertiary"
          >
            {{ technology }}
          </div>
        </div>

        <h4 class="mt-6 text-lg font-semibold text-white">Role</h4>
        <p class="mt-2 text-gray-400">{{ activeProject.role }}</p>

        <a v-if="activeProject.deployLink" :href="activeProject.deployLink">
          <button
            class="w-full mt-6 p-3 text-sm rounded text-white bg-tertiary transition-colors hover:bg-tertiary/70 hover:underline"
          >
            View Project
          </button>
        </a>
      </div>
    </div>
    div
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types';

const store = useProjectsStore();

// Additional fields specific to sidebar
const sidebarFields: { tagline: string; projectImage: string; overview: string; structure: string[]; role: string }[] =
  [
    {
      tagline: 'Elevated Energy Management',
      projectImage: '/images/industrion-thumbnail.png',
      overview:
        'An energy management platform built to give users full control over their energy and gas meters. It allows users to manage meter details, access important documents, and update personal information independently, without direct supervision. Acting as the central hub for the ecosystem, the portal connects users to additional applications and introduces features like energy consumption analysis to deliver valuable energy consumption insights.',
      structure: [
        'HTML',
        'Vue3',
        'Tailwind CSS',
        'Shadcn',
        'Typescript',
        'Adonis',
        'Node.js',
        'Socket.io',
        'PostgreSQL',
      ],
      role: 'Initially focused on implementing responsive front-end designs to enhance usability, my role expanded into a complete redevelopment of the portal. This involved reworking the front-end and back-end to support new functionality and improve maintainability, scalability and performance. I developed a postcode-based meter lookup system to simplify user onboarding and integrated energy consumption analysis tools to provide detailed consumption statistics. Additionally, I incorporated CRM integration, automating prospect creation to streamline workflows between sales and support teams.',
    },
    {
      tagline: 'Customer RelationShip Management',
      projectImage: '/images/astra-thumbnail.jpg',
      overview: '',
      structure: ['HTML', 'Vue3', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'Node.js', 'Socket.io', 'Hasura'],
      role: '',
    },
    {
      tagline: 'Exploring the science of UX through ecommerce Design',
      projectImage: '/images/tech-terminus-index.png',
      overview:
        'This was an ecommerce website that served as an artefact in my research into how less experienced developers could use design to improve the user experience of their applications with limited knowledge of developing.',
      structure: ['HTML', 'React', 'Tailwind CSS', 'Material UI', 'Javascript', 'Express.js', 'Node.js', 'MySQL'],
      role: 'I designed, developed, and hosted the application from the ground up. This involved building all the core features, creating the front-end, writing endpoints for the back-end, creating database tables and hosting the site with Heroku. Additionally, as part of my study, I conducted an A/B test comparing this site to one made with a website builder. After that, I recruited participants for a qualitative study and presented my findings to a panel of academics.',
    },
    {
      tagline: 'Adaptive Auction Platform',
      projectImage: '/images/adapt-thumbnail.png',
      overview: '',
      structure: [
        'HTML',
        'Vue3',
        'Tailwind CSS',
        'Shadcn',
        'Typescript',
        'Adonis',
        'Node.js',
        'Socket.io',
        'PostgreSQL',
      ],
      role: '',
    },
    {
      tagline: 'Real-time communication, at your fingertips',
      projectImage: '/images/messaging-app-thumbnail.png',
      overview:
        'This project is the second iteration of my real-time messaging app, aimed at improving the user experience and adding new features based on user feedback from the initial version. The app allows users to communicate in real-time, providing a seamless and efficient messaging experience.',
      structure: [
        'HTML',
        'Next.js',
        'Tailwind CSS',
        'Material UI',
        'TypeScript',
        'Express.js',
        'Node.js',
        'Socket.io',
        'MySQL',
      ],
      role: `As the sole developer of this project, I took on the challenge of enhancing the app's functionality and design. I implemented new features such as friend requests, profiles and settings, and time stamping messages, improving the overall user experience. I also optimized the codebase for better performance and scalability with Next and TypeScript. Throughout the development process, I actively sought user feedback and iterated on the design to meet their needs and preferences.`,
    },
    {
      tagline: 'Highlighting my skills and projects',
      projectImage: '/images/portfolio-thumbnail.webp',
      overview:
        'This project was a website that I created to use as a marketing tool to showcase my relevant experience and various projects that I have undertaken. The goal was to demonstrate my range of abilities to potential employers or people of interest, and to serve as a hub for my various social profiles on Github, LinkedIn, and email.',
      structure: ['HTML', 'NuxtJS', 'TailwindCSS', 'TypeScript', 'Node.js'],
      role: `I created a personal portfolio website to showcase my skills and experience to potential employers. I faced challenges with Handlebars and difficulties with the design of the page layouts, but overcame them by converting to React, researching other developers' work and using Framer Motion for animations. The end result was a sleek and visually appealing website that effectively highlighted my abilities and experience.`,
    },
  ];

// Combine sidebar fields with store projects
const sidebarProjects = store.projects.map((project: Project, index: number) => {
  return {
    ...project,
    ...sidebarFields[index],
  };
});

// Filter active project
const activeProject = computed(() => {
  const filteredProjects = sidebarProjects.filter((project: Project) => project.heading === store.activeProject);
  return filteredProjects[0];
});

// Disable scroll if sidebar is open
watch(
  () => store.showSidebar,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },
);
</script>
