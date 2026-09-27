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
import type { Project } from '~/types/project';

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
      'The portal acted as the customer-facing layer for several account and energy-management workflows. During onboarding, customers could look up and confirm electricity and gas meter information, while established users could access documents, update account details and view consumption data over time. Those journeys connected back to internal sales and support systems, allowing customer activity and account information to feed into the workflows used by staff.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'Socket.IO', 'PostgreSQL'],
    role: 'I initially worked on responsive and mobile frontend improvements before my role expanded into substantial full-stack development across the existing portal. Later, I carried out a major frontend redesign based on project specifications, rebuilding key meter, document, profile, administration and mobile experiences and integrating previously separate consumption-analysis functionality directly into the portal. On the backend, I worked on meter lookup and onboarding routes, customer and account operations, consumption calculations, authenticated WebSockets and integration with the internal sales CRM. I also added automated tests and continued maintaining the portal as these features were released and supported in production.',
  },
  {
    tagline: 'Sales Pipeline & Integrations',
    projectImage: 'astra-thumbnail.jpg',
    overview:
      'Used by around 200 staff, the CRM brought together the day-to-day process of turning prospects into active sales while keeping customer information and related activity in one place. Staff could manage leads through staged pipelines, work with quotes and sales, update customer and meter information, attach supporting files and follow ongoing activity. It also connected with other internal and customer-facing systems, making it a central shared application rather than a standalone sales tool.',
    structure: ['Vue 3', 'TypeScript', 'GraphQL', 'Hasura', 'AdonisJS'],
    role: 'I became a primary contributor to the CRM’s main sales pipeline within a larger team-owned codebase. I built and extended pipeline behaviour for moving prospects and sales through stages, including quote validation, checklist and submission logic, campaign assignments and handling lost opportunities. My work also covered customer and meter workflows, file attachments, customer-portal integrations and real-time updates. I continued developing and maintaining these areas within the CRM’s established architecture, working alongside other developers on a shared production system.',
  },
  {
    tagline: 'Lead Generation & CRM Integration',
    projectImage: 'shado-thumbnail.png',
    overview:
      'The application gave staff a structured workspace for reviewing prospect data in more detail, with saved filters, prospect views, timelines and campaign management to organise potential leads. Campaign data could also be uploaded and managed inside the tool, while CRM checks helped staff identify whether a prospect already existed before importing it. Together, these workflows connected early-stage prospecting with the company’s existing sales process without requiring staff to manage the work across separate tools.',
    structure: ['Vue 3', 'TypeScript', 'Pinia', 'AdonisJS'],
    role: 'I carried out a full-stack rebuild of the application, refactoring the frontend architecture and rebuilding key search, results and prospect workflows. I reorganised API handling and state management, expanded the filtering and preset system, and built out the campaign functionality across its pages, prospect views and data-upload workflows. I also worked on the CRM validation and import flow, alongside prospect information, timeline and enrichment-related UI. I continued maintaining and improving the application after the rebuild while it was being used in production for lead generation.',
  },
  {
    tagline: 'Adaptive Auction Platform',
    projectImage: 'adapt-thumbnail.png',
    overview:
      'The platform was designed to let customers compare competing energy-supply quotes while staff managed the auction process behind the scenes. Customers could follow bids and quote changes in real time, while staff could manage suppliers, quotes, auction progress and the information linked to each customer’s meters.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'Socket.IO', 'PostgreSQL'],
    role: 'I joined an existing full-stack application and substantially reworked both the customer-facing frontend and the supporting backend. On the frontend, I rebuilt responsive layouts, auction and quote views, progress tracking and real-time interactions. I also refactored the application’s real-time architecture so normal application state was loaded through HTTP requests, with WebSockets reserved for live auction events and updates rather than carrying the whole state model. On the backend, I worked on authentication, auction and quote behaviour, socket handling and the supporting booking and meter-linked workflows.',
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
      'Instead of relying on separate external services to store and process consumption data, the platform centralises millions of electricity and gas readings from multiple sources. It links customers with their meters, processes the incoming data and makes the results available to customer-facing graphs, dashboards and internal tools.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'PostgreSQL'],
    role: 'I joined the project relatively early and later became its sole developer, taking responsibility for its ongoing architecture, development and maintenance. I work across the Vue admin application and AdonisJS backend, integrating external data sources and building processing flows for electricity, gas and calculated consumption data. My work includes converting cumulative readings into interval data, scheduled processing and batched database writes for larger ingestion workloads. When production data does not match expected values, I trace the source data and processing path, confirm the required behaviour with the relevant teams and implement the fix.',
  },
  {
    tagline: 'Sales Operations',
    projectImage: 'sales-admin-thumbnail.PNG',
    overview:
      'The platform provided a focused workspace for managing energy contracts after the sale while continuing to use shared customer and sales data from the wider business systems. Staff could bring existing sales records into the application, work through each contract’s administrative stages, manage customer and meter information, communicate with customers and suppliers, and track follow-up activity. It became the new administration system for around 50 staff.',
    structure: ['Vue 3', 'TypeScript', 'GraphQL', 'Hasura', 'AdonisJS', 'PostgreSQL'],
    role: 'I set up the application and was its sole developer through the first usable MVP. I built the authentication, routing, dashboard, task and administration workflows, event feed and API integration needed to bring existing sales records into the application. As the product grew, I added functionality around meter management, commissions, complaints, customer and supplier communications, comments and tracking changes of energy supplier. I integrated the application with the existing shared backend and data systems, and I continued extending and supporting it as development became collaborative.',
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
  return sidebarProjects.find((project: Project) => project.heading === store.activeProject)!;
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
