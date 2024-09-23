import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects = [
    {
      projectName: 'customer-portal',
      heading: 'Customer Portal',
      deployLink: 'https://portal.industrion.io/',
    },
    {
      projectName: 'crm-system',
      heading: 'Automated CRM System',
    },
    {
      projectName: 'auction-website',
      heading: 'Auction Website',
    },
    {
      projectName: 'portfolio',
      repoLink: 'https://github.com/JoshHaywood/portfolio-website',
      deployLink: 'https://www.joshhaywood-portfolio.com/',
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
