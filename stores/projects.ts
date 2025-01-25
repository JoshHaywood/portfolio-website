import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects: Project[] = [
    {
      heading: 'Customer Portal',
      deployLink: 'https://portal.industrion.io/',
    },
    {
      heading: 'Automated CRM System',
    },
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
      repoLink: 'https://github.com/JoshHaywood/portfolio-website',
      deployLink: 'https://www.joshhaywood-portfolio.com/',
      heading: 'Personal Portfolio Website',
    },
  ];

  const setSidebar = (label: string) => {
    showSidebar.value = true;
    activeProject.value = label;
  };

  return { showSidebar, activeProject, projects, setSidebar };
});
