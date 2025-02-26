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
            <img :src="`../images/${activeProject.projectImage}`" alt="Project picture" class="w-full cursor-pointer" />
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
      tagline: 'Streamlining Lead Generation with Intelligent Automation',
      projectImage: 'shado-thumbnail.png',
      overview:
        'A prospect-finding tool designed to help sales staff identify and target businesses efficiently. By leveraging multiple third-party APIs, the platform gathers comprehensive data on companies, including contact information, location, size, and ownership. Staff can quickly generate detailed prospect previews and seamlessly integrate them into the CRM, enabling them to start working leads with a solid foundation. With robust filtering options, users can target specific business types, simplifying the sales process and improving lead quality.',
      structure: ['HTML', 'Vue3', 'Tailwind CSS', 'Shadcn', 'Typescript', 'Adonis', 'Node.js', 'Cron', 'PostgreSQL'],
      role: 'I led a full-stack rebuild of the platform, reworking both the front-end and back-end to enhance functionality and usability. The front-end received a complete UI overhaul based on marketing team design documents, introducing a large table and accordion layout to present information in a clear and accessible way. On the back-end, I enhanced CRM integration, enabling staff to be assigned to prospects instantly, streamlining the transition from lead generation to active sales. I developed a data-scraping robot that utilised third-party APIs to expand the internal data pool over time, giving staff access to a growing range of prospects. Additionally, I introduced a campaign system where admins could upload CSV files of company data, automatically processing and presenting them as campaign-specific prospects. The filtering system was also expanded, adding a wider array of options to help staff pinpoint high-quality leads more effectively.',
    },
    {
      tagline: 'Adaptive Auction Platform',
      projectImage: 'adapt-thumbnail.png',
      overview:
        'A real-time auction platform designed to connect users with energy suppliers, allowing them to receive and compare quotes instantly. Built with a strong focus on interactivity, the platform enables users to track live bids as they are placed, while staff oversee auctions, manage quotes, and handle supplier contracts. By giving users greater control over their options while maintaining staff oversight, the system streamlines the bidding process and enhances transparency in selecting the best energy deals.',
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
      role: 'I worked extensively across the full stack, starting with a complete front-end redesign based on marketing team designs. This involved restructuring page layouts, introducing new elements, and refining the user flow from receiving quotes to accepting a final offer. On the back-end, I rebuilt the real-time system from the ground up, transitioning from an overly socket-dependent model to a hybrid approach using a combination of WebSockets and HTTP requests. This significantly improved reliability across both customer and staff-facing frontends, preventing real-time data failures. Additionally, I integrated the platform with Microsoft Calendar, allowing staff to schedule dedicated auction oversight periods within their personal schedules.',
    },
    {
      tagline: 'Granular Insights into Energy and Gas Consumption',
      projectImage: 'spark-lab-thumbnail.png',
      overview:
        'A platform designed for organisations with multiple sites to track and analyse their energy and gas consumption in detail. By providing a site-by-site breakdown, users can compare usage across locations and drill down into individual meters for half-hourly, hourly, or daily consumption statistics. Integrated with third-party providers like Zeus and Npower, the platform retrieves accurate gas and electricity data, equipping businesses with the insights needed to optimise efficiency and reduce costs. Seamless integration with the customer portal ensures users can transition effortlessly between applications while retaining relevant data.',
      structure: [
        'HTML',
        'Vue3',
        'Tailwind CSS',
        'Shadcn',
        'Typescript',
        'Adonis',
        'Node.js',
        'Puppeteer',
        'PostgreSQL',
      ],
      role: 'I led a complete front-end refactor, replacing outdated legacy code and restructuring the interface to improve usability and maintainability. This included implementing a new UI library, Shadcn, to align the design with the customer portal and ensure consistency across the ecosystem. On the back-end, I developed the third-party data fetching system, using Puppeteer to automate logins and retrieve consumption statistics where APIs were unavailable. Additionally, I integrated the platform with the customer portal, allowing users to transition seamlessly between applications while carrying over and configuring their organisational data.',
    },
    {
      tagline: 'Highlighting My Skills and Projects',
      projectImage: 'portfolio-thumbnail.webp',
      overview:
        'A personal portfolio website built as both a test of my skills as a new developer and a central place to showcase my experience and projects. Over time, the site evolved significantly, adapting to new technologies and improving maintainability, performance, and readability. Beyond serving as a professional hub, it also provided a space to experiment with different frameworks and refine my development approach.',
      structure: ['HTML', 'NuxtJS', 'React', 'Handlebars', 'TailwindCSS', 'TypeScript', 'Node.js'],
      role: `This project has undergone multiple iterations, reflecting my progression as a developer. Initially built with Handlebars while learning the fundamentals, I later transitioned to React for its component-based structure. As the project grew, I moved to Vue and ultimately Nuxt, taking advantage of its improved maintainability, readability, and built-in server-side rendering. These shifts not only enhanced the site's performance but also refined my approach to structuring applications for scalability and long-term development.`,
    },
    {
      tagline: 'Exploring the science of UX through ecommerce Design',

      projectImage: 'tech-terminus-thumbnail.png',
      overview:
        'This was an ecommerce website that served as an artefact in my research into how less experienced developers could use design to improve the user experience of their applications with limited knowledge of developing.',
      structure: ['HTML', 'React', 'Tailwinds CSS', 'Material UI', 'Javascript', 'Express.js', 'Node.js', 'MySQL'],
      role: 'I designed, developed, and hosted the application from the ground up. This involved building all the core features, creating the front-end, writing endpoints for the back-end, creating database tables and hosting the site with Heroku. Additionally, as part of my study, I conducted an A/B test comparing this site to one made with a website builder. After that, I recruited participants for a qualitative study and presented my findings to a panel of academics.',
    },
    {
      tagline: 'Real-time communication, at your fingertips',
      projectImage: 'messaging-app-thumbnail.png',
      overview:
        'This project is the second iteration of my real-time messaging app, aimed at improving the user experience and adding new features based on user feedback from the initial version. The app allows users to communicate in real-time, providing a seamless and efficient messaging experience.',
      structure: [
        'HTML',
        'Next.js',
        'Tailwinds CSS',
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
      tagline: 'Elevated Energy Management',
      projectImage: 'industrion-thumbnail.png',
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
        'Cron',
        'Socket.io',
        'PostgreSQL',
      ],
      role: 'Initially focused on implementing responsive front-end designs to enhance usability, my role expanded into a complete redevelopment of the portal. This involved reworking the front-end and back-end to support new functionality and improve maintainability, scalability and performance. I developed a postcode-based meter lookup system to simplify user onboarding and integrated energy consumption analysis tools to provide detailed consumption statistics. Additionally, I incorporated CRM integration, automating prospect creation to streamline workflows between sales and support teams.',
    },
    {
      tagline: 'Customer Relationship Management',
      projectImage: 'astra-thumbnail.jpg',
      overview:
        'A CRM platform designed to revolutionise how sales staff handle prospects, leads, and customer interactions. Built with a strong focus on automation, the system streamlines data collection, prospect creation, and the entire sales workflow. By integrating AI-generated summaries, internal communication tools, and external systems, it provides staff with up-to-date insights on sales progression and collaboration. Using GraphQL and Hasura, the platform ensures a lightweight backend and fine-grained control over permissions, enabling efficient integration with the PostgreSQL database and flexibility for future development.',
      structure: ['HTML', 'Vue3', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'Node.js', 'Socket.io', 'Hasura'],
      role: 'I started by designing and developing a Kanban-style board to manage prospects, leads, and sales, iterating on it based on staff feedback to improve workflows and usability. I implemented the initial sales flow, allowing staff to create and assign sales while ensuring seamless interaction with existing systems. A key achievement was integrating the CRM with the customer portal, enabling staff to view and manage customer data, update meter details, and upload files during onboarding. Throughout the rollout, I actively maintained and refined the system, applying updates and fixes to address feedback, ensuring the platform met the needs of its users and supported the sales team’s efficiency.',
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
