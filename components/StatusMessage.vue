<template>
  <div class="flex h-screen flex-col justify-center space-y-10 px-5 text-center sm:px-0">
    <h1 class="text-6xl font-semibold text-white">{{ props.heading }}</h1>
    <h2 class="text-xl text-gray-400">{{ props.message }}</h2>

    <button
      class="mx-auto rounded border-2 border-primary p-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/30"
      @click="handleRedirect"
    >
      Go Back
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  redirect: {
    type: [String, Number],
    required: true,
  },
});

const handleRedirect = () => {
  // If redirect is a number, go back that many pages
  if (typeof props.redirect === 'number') {
    router.go(props.redirect);
    // If redirect is a string, push that route
  } else if (typeof props.redirect === 'string') {
    router.push(props.redirect);
  }
};
</script>
