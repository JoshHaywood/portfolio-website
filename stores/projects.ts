import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects = [
    {
      projectName: 'freelancing-website',
      heading: 'Customer Portal',
      deployLink: 'https://joshhaywood.github.io/portfolio-website/',
    },
    {
      projectName: 'student-survival-store',
      heading: 'Automated CRM System',
    },
    {
      projectName: 'esports-center',
      heading: 'Auction Website',
    },
    {
      projectName: 'portfolio',
      repoLink: 'https://github.com/JoshHaywood/portfolio-website',
      deployLink: 'https://joshhaywood.github.io/portfolio-website/',
      heading: 'Personal Portfolio Website',
    },
    {
      projectName: 'tech-terminus',
      repoLink: 'https://github.com/JoshHaywood/tech-terminus',
      heading: 'Ecommerce website',
    },
    {
      projectName: 'realtime-messaging-app',
      repoLink: 'https://github.com/JoshHaywood/messaging-app',
      heading: 'Real-Time Messaging App',
    },
  ];

  return { showSidebar, activeProject, projects };
});
