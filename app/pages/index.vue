<template>
  <div>
    <HeroMain />

    <section id="projects" class="relative z-10 -mt-12 border-t border-white/[0.06] bg-tertiary pb-20 pt-14 sm:-mt-14 sm:pt-16 lg:-mt-16 lg:pb-24 lg:pt-20">
      <div class="mx-auto max-w-[1320px] px-5 md:px-10 2xl:px-0">
        <ProjectContainer />
      </div>
    </section>

    <div class="mx-auto max-w-[1100px] space-y-24 px-5 pb-14 pt-24 sm:space-y-28 sm:pb-16 sm:pt-28 md:px-10 md:pb-20 md:pt-32 xl:px-0">
      <AboutMe id="about" />
      <ContactForm id="contact" />
    </div>

    <Transition name="project-detail">
      <ProjectSidebar v-show="isOpen" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const title = 'Josh Haywood | Full-Stack Software Engineer';
const description =
  'Full-stack software engineer with 3+ years of commercial experience building and supporting production software across frontend, backend and data systems.';
const canonicalUrl = 'https://www.joshhaywood-portfolio.com/';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogSiteName: 'Josh Haywood',
  ogLocale: 'en_GB',
  twitterCard: 'summary',
  twitterTitle: title,
  twitterDescription: description,
});

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],
});

const { isOpen } = useProjectSidebar();
</script>



<style scoped>
.project-detail-enter-active,
.project-detail-leave-active {
  transition: opacity 160ms ease;
}

.project-detail-enter-from,
.project-detail-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .project-detail-enter-active,
  .project-detail-leave-active {
    transition: none;
  }
}
</style>
