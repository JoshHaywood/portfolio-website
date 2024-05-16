<template>
  <div>
    <SectionHeading heading="Featured Projects" />

    <div class="mt-12 space-y-10 lg:space-y-24">
      <FeaturedProjects />
      <ProjectCards />
    </div>

    <Transition>
      <ProjectSidebar v-show="store.showSidebar" class="fixed top-0 bottom-0 right-0 z-50 transition-transform" />
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
