<template>
  <section>
    <div class="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_210px_minmax(280px,0.75fr)] lg:items-start lg:gap-12 xl:gap-14">
      <div>
        <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">About</p>
        <h2 class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
          A broader view of my work
        </h2>

        <div class="mt-6 max-w-[650px] space-y-5 text-base leading-7 text-gray-400 sm:leading-8">
          <p>
            Over the last few years, I’ve progressed from contributing individual features to taking responsibility for
            larger areas of delivery and ongoing systems. I enjoy taking work from a real requirement through to a
            shipped feature: understanding what people need, working through the technical problem and writing the code
            to deliver it.
          </p>

          <p>
            My work has ranged from customer-facing applications to internal tools such as an automation-driven CRM
            system. That has included working directly with stakeholders, picking up unfamiliar technologies and moving
            across different parts of a system.
          </p>
        </div>

        <div class="mt-6 border-t border-white/[0.08] pt-4">
          <p class="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-primary">Technologies I work with</p>
          <p class="mt-2 max-w-[650px] font-mono text-[0.7rem] leading-5 text-[#8d95a6]">
            {{ technologies.join(' · ') }}
          </p>
        </div>
      </div>

      <div class="w-[160px] sm:w-[180px] lg:mt-10 lg:w-full">
        <div class="overflow-hidden rounded-xl border border-white/10 bg-tertiary p-1.5">
          <NuxtImg
            src="/images/portrait.webp"
            alt="Josh Haywood"
            width="420"
            loading="lazy"
            class="aspect-[4/5] w-full rounded-lg object-cover object-center"
          />
        </div>
      </div>

      <div class="lg:mt-10">
        <p class="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#7f8798]">What that looks like</p>

        <div class="mt-5 divide-y divide-white/[0.08] border-y border-white/[0.08] lg:border-y-0">
          <div v-for="capability in capabilities" :key="capability.heading" class="py-5 first:pt-0 lg:first:pt-0">
            <h3 class="text-sm font-semibold text-white sm:text-base">{{ capability.heading }}</h3>
            <p class="mt-2 text-sm leading-6 text-gray-400">{{ capability.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const capabilities: { heading: string; text: string }[] = [
  {
    heading: 'Software Development',
    text: 'Building and maintaining application features with an emphasis on readable code, sensible structure and behaviour that fits the wider system.',
  },
  {
    heading: 'Problem Solving & Systems',
    text: 'Analysing technical problems, understanding how connected parts of a system behave and choosing practical solutions at the right level.',
  },
  {
    heading: 'Delivery & Collaboration',
    text: 'Working with developers and stakeholders to clarify requirements, communicate trade-offs and keep implementation aligned with what the work actually needs.',
  },
];

const technologies: string[] = [
  'TypeScript',
  'Vue 3',
  'Node.js',
  'AdonisJS',
  'PostgreSQL',
  'GraphQL',
  'Hasura',
  'Socket.IO',
  'Git',
];
</script>
