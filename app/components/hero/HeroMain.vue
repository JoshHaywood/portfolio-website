<template>
  <section class="bg-secondary pt-16 md:pt-[72px]">
    <div
      class="mx-auto flex min-h-[560px] max-w-[1100px] items-center px-5 pb-28 pt-10 sm:min-h-[590px] sm:pb-32 md:min-h-[620px] md:px-10 md:pb-36 lg:min-h-[640px] xl:px-0"
    >
      <div class="max-w-[760px]">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">Hi, I'm</p>

        <h1 class="mt-5 text-[2.75rem] font-bold leading-none tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
          Josh Haywood
        </h1>

        <h2 class="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-gray-100 sm:text-3xl lg:text-4xl">
          Full-Stack Software Engineer
        </h2>

        <p class="mt-5 max-w-[675px] text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
          For 3+ years at Direct Global, I’ve built and supported production software across frontend, backend and data
          systems, from requirements to release.
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3.5">
          <button
            type="button"
            class="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-[background-color,transform] hover:bg-primary/90 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            @click="scrollTo('projects')"
          >
            View selected work
          </button>

          <a
            href="/documents/josh-haywood-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.025] px-5 py-2.5 text-sm font-semibold text-white transition-[border-color,background-color,transform] hover:border-white/25 hover:bg-white/[0.05] active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View CV
          </a>

          <a
            href="https://www.linkedin.com/in/josh-haywood"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full px-0 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-[421px]:w-auto min-[421px]:px-2"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollTo } = useScrollTo();
</script>
