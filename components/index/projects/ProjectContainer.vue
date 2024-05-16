<template>
  <div>
    <SectionHeading heading="Featured Projects" />

    <div class="mt-12 space-y-10 lg:space-y-24">
      <FeaturedProjects
        :show-sidebar="store.showSidebar"
        @toggle-sidebar="store.showSidebar = !store.showSidebar"
        @set-project="store.activeProject = $event"
      />
      <ProjectCards
        :show-sidebar="store.showSidebar"
        :projects="store.projects"
        @toggle-sidebar="store.showSidebar = !store.showSidebar"
        @set-project="store.activeProject = $event"
      />
    </div>

    <Transition>
      <ProjectSidebar
        v-show="store.showSidebar"
        :show-sidebar="store.showSidebar"
        :active-project="store.activeProject"
        :projects="store.projects"
        class="fixed top-0 bottom-0 right-0 z-50 transition-transform"
        @toggle-sidebar="store.showSidebar = !store.showSidebar"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const store = useProjectsStore();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translateX(550px);
}
</style>
