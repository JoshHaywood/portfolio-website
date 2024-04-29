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
        @toggle-sidebar="showSidebar = !showSidebar"
        @set-project="activeProject = $event"
      />
    </div>

    <Transition>
      <ProjectSidebar
        v-show="showSidebar"
        :show-sidebar="showSidebar"
        :active-project="activeProject"
        class="fixed top-0 bottom-0 right-0 z-50 transition"
        @toggle-sidebar="showSidebar = !showSidebar"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showSidebar = ref<boolean>(false);
const activeProject = ref<string>('');
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translateX(550px);
}
</style>
