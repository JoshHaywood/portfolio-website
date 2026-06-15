<template>
  <div>
    <HeroMain />

    <div
      class="mx-auto mb-36 mt-20 max-w-[1100px] space-y-28 px-5 sm:mt-28 md:mb-56 md:space-y-48 lg:mb-64 xl:space-y-56 xl:px-0"
    >
      <AboutMe id="about" v-motion :initial="initial()" :visible-once="animation()" />
      <SkillSet id="skills" v-motion :initial="initial()" :visible-once="animation()" />
      <ProjectContainer id="projects" v-motion :initial="initial()" :visible-once="animation()" />
      <ContactForm id="contact" v-motion :initial="initial()" :visible-once="animation()" />
    </div>

    <Transition>
      <ProjectSidebar v-show="store.showSidebar" class="fixed bottom-0 right-0 top-0 z-50 transition-transform" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const store = useProjectsStore();

const initial = () => ({
  opacity: 0,
  y: 20,
});

const animation = () => ({
  opacity: 1,
  y: 0,
  transition: {
    delay: 200,
    type: 'keyframes',
    ease: 'easeInOut',
  },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translateX(550px);
}
</style>
