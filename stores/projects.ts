import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects: { projectName: string; heading: string; deployLink?: string; repoLink?: string }[] = [
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
      projectName: 'prospecting-tool',
      heading: 'Automated Prospecting Tool',
    },
    {
      projectName: 'auction-platform',
      heading: 'Auction Platform',
    },
    {
      projectName: 'energy-tracker',
      heading: 'Organisational Energy Tracker',
    },
    {
      projectName: 'portfolio',
      repoLink: 'https://github.com/JoshHaywood/portfolio-website',
      deployLink: 'https://www.joshhaywood-portfolio.com/',
      heading: 'Personal Portfolio Website',
    },
  ];

  const setSidebar = (label: string) => {
    showSidebar.value = true;
    activeProject.value = label.toLowerCase().replace(/ /g, '-'); // Match formatting expected by sidebar
  };

  return { showSidebar, activeProject, projects, setSidebar };
});
