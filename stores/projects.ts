import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('project', () => {
  const showSidebar = ref<boolean>(false);
  const activeProject = ref<string>('');

  const projects = [
    {
      projectName: 'portfolio',
      repoLink: 'https://github.com/JoshHaywood/portfolio-website',
      deployLink: 'https://www.joshhaywood-portfolio.com/',
      heading: 'Personal Portfolio Website',
    },
    {
      projectName: 'tech-terminus',
      repoLink: 'https://github.com/JoshHaywood/tech-terminus',
      deployLink: 'http://www.tech-terminus.me/',
      heading: 'Ecommerce website',
    },
    {
      projectName: 'realtime-messaging-app',
      repoLink: 'https://github.com/JoshHaywood/messaging-app',
      deployLink: 'https://messaging-app.herokuapp.com/',
      heading: 'Real-Time Messaging App',
    },
    {
      projectName: 'freelancing-website',
      repoLink: 'https://github.com/JoshHaywood/pop-up-team',
      deployLink: '/error',
      heading: 'Freelancing Website',
    },
    {
      projectName: 'student-survival-store',
      repoLink: 'https://github.com/JoshHaywood/student-survival-store',
      deployLink: '/error',
      heading: 'SaaS Student Survival Store',
    },
    {
      projectName: 'esports-center',
      repoLink: 'https://github.com/JoshHaywood/esports-center',
      deployLink: '/error',
      heading: 'Esports Stats Tracking Website',
    },
  ];

  return { showSidebar, activeProject, projects };
});
