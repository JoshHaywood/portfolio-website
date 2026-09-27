import { defineStore } from 'pinia';
import type { Project } from '@/types';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects: Project[] = [
    {
      heading: 'Customer Portal',
      deployLink: 'https://portal.industrion.io/',
    },
    {
      heading: 'Astra CRM',
    },
    {
      heading: 'Prospecting Tool',
    },
    {
      heading: 'Auction Platform',
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
  ];

  const setSidebar = (label: string) => {
    showSidebar.value = true;
    activeProject.value = label;
  };

  return { showSidebar, activeProject, projects, setSidebar };
});
