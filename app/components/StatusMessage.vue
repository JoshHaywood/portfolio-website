<template>
  <section class="bg-secondary pt-16 md:pt-[72px]">
    <div
      class="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-[1100px] items-center px-5 py-20 md:min-h-[calc(100dvh-4.5rem)] md:px-10 xl:px-0"
    >
      <div class="max-w-[640px]">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">Confirmation</p>

        <h1 class="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          {{ props.heading }}
        </h1>

        <p class="mt-5 max-w-[560px] text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          {{ props.message }}
        </p>

        <button
          type="button"
          class="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          @click="handleRedirect"
        >
          Back to portfolio
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const router = useRouter();

const props = defineProps<{
  heading: string;
  message: string;
  redirect: string | number;
}>();

const handleRedirect = () => {
  if (typeof props.redirect === 'number') {
    router.go(props.redirect);
  } else {
    router.push(props.redirect);
  }
};
</script>
