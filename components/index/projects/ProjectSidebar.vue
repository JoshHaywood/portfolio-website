<template>
  <div>
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
          <GithubLink :link="activeProject?.repoLink ?? ''" class="h-5 w-5" />
          <DeployLink :link="activeProject?.deployLink ?? ''" class="h-5 w-5" />
        </div>
      </div>

      <!-- Project details -->
      <div class="mt-16">
        <h1 class="text-2xl font-bold tracking-wide text-primary">{{ activeProject?.heading }}</h1>
        <div class="mt-2 text-gray-400">{{ activeProject?.tagline }}</div>

        <div class="mt-6 overflow-hidden rounded-lg">
          <div class="hover:scale-105 transition-transform">
            <img :src="activeProject?.projectImage" alt="Project picture" class="w-full cursor-pointer" />
          </div>
        </div>

        <h2 class="mt-6 text-lg font-semibold text-white">Overview</h2>
        <p class="mt-2 text-gray-400">{{ activeProject?.overview }}</p>

        <h3 class="mt-6 text-lg font-semibold text-white">Technologies</h3>
        <div class="flex flex-wrap mt-1">
          <div
            v-for="technology in activeProject?.structure"
            :key="technology"
            class="mt-2 mr-2 p-2 text-sm rounded text-gray-400 bg-tertiary"
          >
            {{ technology }}
          </div>
        </div>

        <h4 class="mt-6 text-lg font-semibold text-white">Role</h4>
        <p class="mt-2 text-gray-400">{{ activeProject?.role }}</p>

        <a :href="activeProject?.deployLink">
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
const store = useProjectsStore();

// Additional fields specific to sidebar
const sidebarFields = [
  {
    tagline: 'Highlighting my skills and projects',
    projectImage: '../images/portfolio-thumbnail.webp',
    overview:
      'This project was a website that I created to use as a marketing tool to showcase my relevant experience and various projects that I have undertaken. The goal was to demonstrate my range of abilities to potential employers or people of interest, and to serve as a hub for my various social profiles on Github, LinkedIn, and email.',
    structure: ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js', 'Node.js'],
    role: `I created a personal portfolio website to showcase my skills and experience to potential employers. I faced challenges with Handlebars and difficulties with the design of the page layouts, but overcame them by converting to React, researching other developers' work and using Framer Motion for animations. The end result was a sleek and visually appealing website that effectively highlighted my abilities and experience.`,
  },
  {
    tagline: 'Exploring the science of UX through ecommerce Design',

    projectImage: '../images/tech-terminus-index.png',
    overview:
      'This was an ecommerce website that served as an artefact in my research into how less experienced developers could use design to improve the user experience of their applications with limited knowledge of developing.',
    structure: ['HTML', 'React', 'Tailwinds CSS', 'Material UI', 'Javascript', 'Express.js', 'Node.js', 'MySQL'],
    role: 'I designed, developed, and hosted the application from the ground up. This involved building all the core features, creating the front-end, writing endpoints for the back-end, creating database tables and hosting the site with Heroku. Additionally, as part of my study, I conducted an A/B test comparing this site to one made with a website builder. After that, I recruited participants for a qualitative study and presented my findings to a panel of academics.',
  },
  {
    tagline: 'Real-time communication, at your fingertips',
    projectImage: '../images/messaging-app-thumbnail.png',
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
    tagline: 'Connecting clients and freelancers',
    projectImage: '../images/popup-team-thumbnail.png',
    overview:
      'This project was a freelancing website that I developed as part of a group project. The goal was to create a platform that connects clients with freelancers across various technology disciplines. The website provided features such as a client directory, instant messaging, and a built-in kanban board.',
    structure: [
      'HTML',
      'React',
      'Tailwinds CSS',
      'Material UI',
      'Javascript',
      'Express.js',
      'Node.js',
      'Socket.io',
      'MySQL',
    ],
    role: 'In this project, I played a key role in full-stack development. I was responsible for creating interfaces, database tables, and endpoints for core features. This involved developing user registration and authentication systems, designing the client directory and freelancer profile pages, and integrating a real-time one-to-one instant messaging system. The final result was a user-friendly platform that effectively facilitated the connection between clients and freelancers.',
  },
  {
    tagline: 'Surviving student life, made easy',
    projectImage: '../images/student-survival-store-index.webp',
    overview:
      "This was a group project in my second year of university that centered around a business that provided a subscription-based box of student-related supplies. My role was front-end development and documentation handling. I maintained our team's agile approach by documenting each stand-up's notes, targets, target status, and any issues that occurred for that week. This project was my first time using React, so my development was not as substantial as normal, but I did create components such as the mobile header and implemented the user profile modal.",
    structure: ['HTML', 'React', 'Tailwinds CSS', 'Javascript', 'Express.js', 'Node.js', 'SQLite'],
    role: 'I helped create an e-commerce website to sell student survival kits. My role was focused on the development and design of the website, as well as working with a team to create the product offerings. One of the main challenges was ensuring a smooth and user-friendly checkout process, which was addressed by implementing a variety of payment options and testing them thoroughly.',
  },
  {
    tagline: 'Leading the way in Esports statistics',
    projectImage: '../images/tech-terminus-thumbnail.jpg',
    overview:
      'This was a group project in my second year with the same team as the Student Survival Store project. Similarly to that project, the Esports Center was first presented through a business plan in which each team member pitched their own ideas. My own pitch was for the Esports Center, a statistics tracking website focused on the sporting genre of esports, or the competitive play of video games. My role in the project was front-end development and design, as well as documentation.',
    structure: ['HTML', 'React', 'CSS', 'Material UI', 'Javascript', 'Express.js', 'Node.js', 'MySQL'],
    role: `I assisted in creating a web platform for a local e-sport center, where users can find information about tournaments and events, as well as register and pay for them online. My role included working on the design and development of the website, as well as implementing a system for tournament registration and payment. One of the main challenges was ensuring the security and reliability of the payment system, which was addressed by using a well-known and secure payment gateway.`,
  },
];

// Combine sidebar fields with store projects
const sidebarProjects = store.projects.map((project: any, index: number) => {
  return {
    ...project,
    ...sidebarFields[index],
  };
});

// Filter active project
const activeProject = computed(() => {
  const filteredProjects = sidebarProjects.filter((project: any) => project.projectName === store.activeProject);
  return filteredProjects.length > 0 ? filteredProjects[0] : null;
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
