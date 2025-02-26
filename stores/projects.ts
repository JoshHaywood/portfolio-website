import { defineStore } from 'pinia';
import type { Project } from '@/types';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects: Project[] = [
    {
      heading: 'Automated Prospecting Tool',
    },
    {
      heading: 'Auction Platform',
    },
    {
      heading: 'Organisational Energy Tracker',
    },
    {
      heading: 'Personal Portfolio Website',
      repoLink: 'https://github.com/JoshHaywood/portfolio-website',
      deployLink: 'https://www.joshhaywood-portfolio.com/',
    },
    {
      heading: 'Ecommerce website',
      repoLink: 'https://github.com/JoshHaywood/tech-terminus',
    },
    {
      heading: 'Real-Time Messaging App',
      repoLink: 'https://github.com/JoshHaywood/messaging-app',
    },
    {
      heading: 'Customer Portal',
      deployLink: 'https://portal.industrion.io/',
    },
    {
      heading: 'Automated CRM System',
    },
  ];

  const setSidebar = (label: string) => {
    showSidebar.value = true;
    activeProject.value = label;
  };

  return { showSidebar, activeProject, projects, setSidebar };
});
