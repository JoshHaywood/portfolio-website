<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number;
  };
}>();

const statusCode = computed(() => props.error.statusCode ?? 500);
const isNotFound = computed(() => statusCode.value === 404);

useSeoMeta({
  title: computed(() => `${statusCode.value} | Josh Haywood`),
  robots: 'noindex',
});
</script>

<template>
  <main class="flex min-h-screen items-center bg-secondary px-[20px] py-16 text-white md:px-10">
    <div class="mx-auto w-full max-w-[680px]">
      <p class="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">{{ statusCode }}</p>
      <h1 class="mt-4 text-[clamp(2rem,9vw,4rem)] font-bold leading-none tracking-[-0.045em]">
        {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="mt-6 max-w-[560px] text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
        {{
          isNotFound
            ? 'The page you are looking for does not exist or may have moved.'
            : 'An unexpected problem prevented this page from loading. Please return to the portfolio and try again.'
        }}
      </p>
      <NuxtLink
        to="/"
        class="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-[background-color,transform] hover:bg-primary/90 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Back to portfolio
      </NuxtLink>
    </div>
  </main>
</template>
