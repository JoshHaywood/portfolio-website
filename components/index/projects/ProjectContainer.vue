<template>
  <div>
    <SectionHeading heading="Featured Projects" />

    <div class="mt-12 space-y-10 lg:space-y-24">
      <FeaturedProjects
        :show-sidebar="showSidebar"
        @toggle-sidebar="showSidebar = !showSidebar"
        @set-project="activeProject = $event"
      />
      <ProjectCards
        :show-sidebar="showSidebar"
        :projects="projects"
        @toggle-sidebar="showSidebar = !showSidebar"
        @set-project="activeProject = $event"
      />
    </div>

    <Transition>
      <ProjectSidebar
        v-show="showSidebar"
        :show-sidebar="showSidebar"
        :active-project="activeProject"
        :projects="projects"
        class="fixed top-0 bottom-0 right-0 z-50 transition-transform"
        @toggle-sidebar="showSidebar = !showSidebar"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translateX(550px);
}
</style>
