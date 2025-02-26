<template>
  <div>
    <HeroMain />

    <div
      class="max-w-[1100px] mt-20 sm:mt-28 mb-36 md:mb-56 lg:mb-64 mx-auto px-5 xl:px-0 space-y-28 md:space-y-48 xl:space-y-56"
    >
      <AboutMe id="about" v-motion :initial="initial()" :visible-once="animation()" />
      <SkillSet id="skills" v-motion :initial="initial()" :visible-once="animation()" />
      <ProjectContainer id="projects" v-motion :initial="initial()" :visible-once="animation()" />
      <ContactForm id="contact" v-motion :initial="initial()" :visible-once="animation()" />
    </div>

    <Transition>
      <ProjectSidebar v-show="store.showSidebar" class="fixed top-0 bottom-0 right-0 z-50 transition-transform" />
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
