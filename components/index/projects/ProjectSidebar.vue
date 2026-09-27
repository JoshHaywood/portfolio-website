<template>
  <div v-if="store.activeProject">
    <div class="fixed left-0 h-screen w-screen bg-black opacity-40" @click="store.showSidebar = false"></div>

    <div class="fixed bottom-0 right-0 top-0 h-screen w-full overflow-y-scroll bg-secondary p-5 sm:w-[550px] sm:p-10">
      <!-- Navigation -->
      <div class="flex flex-row justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="h-6 w-6 cursor-pointer text-gray-400 transition-colors hover:text-primary"
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
            <img :src="`/images/${activeProject.projectImage}`" alt="Project picture" class="w-full cursor-pointer" />
          </div>
        </div>

        <h2 class="mt-6 text-lg font-semibold text-white">Overview</h2>
        <p class="mt-2 text-gray-400">{{ activeProject.overview }}</p>

        <h3 class="mt-6 text-lg font-semibold text-white">Technologies</h3>
        <div class="mt-1 flex flex-wrap">
          <div
            v-for="technology in activeProject.structure"
            :key="technology"
            class="mr-2 mt-2 rounded bg-tertiary p-2 text-sm text-gray-400"
          >
            {{ technology }}
          </div>
        </div>

        <h4 class="mt-6 text-lg font-semibold text-white">Role</h4>
        <p class="mt-2 text-gray-400">{{ activeProject.role }}</p>

        <a v-if="activeProject.deployLink" :href="activeProject.deployLink">
          <button
            class="mt-6 w-full rounded bg-tertiary p-3 text-sm text-white transition-colors hover:bg-tertiary/70 hover:underline"
          >
            View Project
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types';

const store = useProjectsStore();

// Additional fields specific to sidebar
const sidebarFields: {
  tagline: string;
  projectImage: string;
  overview: string;
  structure: string[];
  role: string;
}[] = [
  {
    tagline: 'Elevated Energy Management',
    projectImage: 'industrion-thumbnail.png',
    overview:
      'An energy customer self-service portal for managing electricity and gas meter details, documents and account information. It also provides consumption insights and connects customer activity with the company’s internal sales and support systems.',
    structure: [
      'HTML',
      'Vue3',
      'Tailwind CSS',
      'Shadcn',
      'TypeScript',
      'Adonis',
      'Node.js',
      'Cron',
      'Socket.io',
      'PostgreSQL',
    ],
    role: 'Initially focused on implementing responsive front-end designs to enhance usability, my role expanded into a complete redevelopment of the portal. This involved reworking the front-end and back-end to support new functionality and improve maintainability, scalability and performance. I developed a postcode-based meter lookup system to simplify user onboarding and integrated energy consumption analysis tools to provide detailed consumption statistics. Additionally, I incorporated integration with the internal sales CRM, automating prospect creation to streamline workflows between sales and support teams.',
  },
  {
    tagline: 'Customer Relationship Management',
    projectImage: 'astra-thumbnail.jpg',
    overview:
      'An internal sales CRM used to manage prospects, leads, customer information and sales workflows. It combines pipeline management, automation, communication and integrations with other business systems, with GraphQL and Hasura providing controlled access to PostgreSQL data.',
    structure: ['HTML', 'Vue3', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'Node.js', 'Socket.io', 'Hasura'],
    role: 'I started by designing and developing a Kanban-style board to manage prospects, leads, and sales, iterating on it based on staff feedback to improve workflows and usability. I implemented the initial sales flow, allowing staff to create and assign sales while ensuring seamless interaction with existing systems. A key achievement was integrating the CRM with the customer portal, enabling staff to view and manage customer data, update meter details, and upload files during onboarding. Throughout the rollout, I actively maintained and refined the system, applying updates and fixes to address feedback, ensuring the platform met the needs of its users and supported the sales team’s efficiency.',
  },
  {
    tagline: 'Lead Generation & CRM Integration',
    projectImage: 'shado-thumbnail.png',
    overview:
      'The application gave staff a structured workspace for reviewing prospect data in more detail, with saved filters, prospect views, timelines and campaign management to organise potential leads. Campaign data could also be uploaded and managed inside the tool, while CRM checks helped staff identify whether a prospect already existed before importing it. Together, these workflows connected early-stage prospecting with the company’s existing sales process without requiring staff to manage the work across separate tools.',
    structure: ['Vue 3', 'TypeScript', 'Pinia', 'AdonisJS'],
    role:
      'I carried out a full-stack rebuild of the application, refactoring the frontend architecture and rebuilding key search, results and prospect workflows. I reorganised API handling and state management, expanded the filtering and preset system, and built out the campaign functionality across its pages, prospect views and data-upload workflows. I also worked on the CRM validation and import flow, alongside prospect information, timeline and enrichment-related UI. I continued maintaining and improving the application after the rebuild while it was being used in production for lead generation.',
  },
  {
    tagline: 'Adaptive Auction Platform',
    projectImage: 'adapt-thumbnail.png',
    overview:
      'A real-time auction platform designed to connect users with energy suppliers, allowing them to receive and compare quotes instantly. Built with a strong focus on interactivity, the platform enables users to track live bids as they are placed, while staff oversee auctions, manage quotes, and handle supplier contracts. By giving users greater control over their options while maintaining staff oversight, the system streamlines the bidding process and enhances transparency in selecting the best energy deals.',
    structure: ['HTML', 'Vue3', 'Tailwind CSS', 'Shadcn', 'TypeScript', 'Adonis', 'Node.js', 'Socket.io', 'PostgreSQL'],
    role: 'I worked extensively across the full stack, starting with a complete front-end redesign based on marketing team designs. This involved restructuring page layouts, introducing new elements, and refining the user flow from receiving quotes to accepting a final offer. On the back-end, I rebuilt the real-time system from the ground up, transitioning from an overly socket-dependent model to a hybrid approach using a combination of WebSockets and HTTP requests. This significantly improved reliability across both customer and staff-facing frontends, preventing real-time data failures. Additionally, I integrated the platform with Microsoft Graph Bookings, allowing staff to schedule auction oversight periods around staff availability.',
  },
  {
    tagline: 'Highlighting My Skills and Projects',
    projectImage: 'portfolio-thumbnail.webp',
    overview:
      'A personal portfolio website built as both a test of my skills as a new developer and a central place to showcase my experience and projects. Over time, the site evolved significantly, adapting to new technologies and improving maintainability, performance, and readability. Beyond serving as a professional hub, it also provided a space to experiment with different frameworks and refine my development approach.',
    structure: ['HTML', 'NuxtJS', 'React', 'Handlebars', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    role: `This project has undergone multiple iterations, reflecting my progression as a developer. Initially built with Handlebars while learning the fundamentals, I later transitioned to React for its component-based structure. As the project grew, I moved to Vue and ultimately Nuxt, taking advantage of its improved maintainability, readability, and built-in server-side rendering. These shifts not only enhanced the site's performance but also refined my approach to structuring applications for scalability and long-term development.`,
  },
  {
    tagline: 'Exploring the science of UX through e-commerce design',
    projectImage: 'tech-terminus-thumbnail.png',
    overview:
      'This was an e-commerce website that served as an artefact in my research into how less experienced developers could use design to improve the user experience of their applications with limited development knowledge.',
    structure: ['HTML', 'React', 'Tailwind CSS', 'Material UI', 'JavaScript', 'Express.js', 'Node.js', 'MySQL'],
    role: 'I designed, developed, and hosted the application from the ground up. This involved building all the core features, creating the front-end, writing endpoints for the back-end, creating database tables and hosting the site with Heroku. Additionally, as part of my study, I conducted an A/B test comparing this site to one made with a website builder. After that, I recruited participants for a qualitative study and presented my findings to a panel of academics.',
  },
  {
    tagline: 'Data Processing & Integrations',
    projectImage: 'portal-featured-thumbnail.jpg',
    overview:
      'A platform centralising and processing electricity and gas consumption data from multiple external sources for customer-facing and internal applications.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'Node.js', 'PostgreSQL'],
    role:
      'I took over development early in the project and have worked across both the Vue frontend and AdonisJS backend, building data-processing and integration functionality and supporting the system in production.',
  },
  {
    tagline: 'Sales Operations',
    projectImage: 'sales-admin-thumbnail.PNG',
    overview:
      'The platform provided a focused workspace for managing energy contracts after the sale while continuing to use shared customer and sales data from the wider business systems. Staff could bring existing sales records into the application, work through each contract’s administrative stages, manage customer and meter information, communicate with customers and suppliers, and track follow-up activity. It became the new administration system for around 50 staff.',
    structure: ['Vue 3', 'TypeScript', 'GraphQL', 'Hasura', 'AdonisJS', 'PostgreSQL'],
    role:
      'I set up the application and was its sole developer through the first usable MVP. I built the authentication, routing, dashboard, task and administration workflows, event feed and API integration needed to bring existing sales records into the application. As the product grew, I added functionality around meter management, commissions, complaints, customer and supplier communications, comments and tracking changes of energy supplier. I integrated the application with the existing shared backend and data systems, and I continued extending and supporting it as development became collaborative.',
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
