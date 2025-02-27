<template>
  <!-- Offset index space-y -->
  <div class="max-md:pt-8">
    <SectionHeading heading="Skill-Set" />

    <div class="flex max-md:flex-col md:w-full max-md:space-y-5 md:space-x-5 lg:space-x-10">
      <div
        v-for="(card, index) in cards"
        :key="index"
        v-motion
        :initial="{
          opacity: 0,
          y: 20,
        }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 200,
            type: 'keyframes',
            ease: 'easeInOut',
          },
        }"
        class="relative md:w-1/3 px-5 pt-10 sm:pt-5 lg:pt-10 pb-20 space-y-8 md:rounded md:border-b md:border-primary bg-tertiary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-12 h-auto mb-5 sm:my-5 fill-primary">
          <path :d="`${card.path}`" />
        </svg>

        <h3 class="text-xl text-white">{{ card.heading }}</h3>
        <p class="text-gray-400">{{ card.text }}</p>

        <div class="absolute bottom-8 text-sm text-gray-600">{{ card.projectNumber }}+ projects</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards: { path: string; heading: string; text: string; projectNumber: string }[] = [
  {
    path: 'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
    heading: 'Full-stack Development',
    text: 'Developing end-to-end solutions that bridge the gap between sleek front-ends and robust back-end systems. My approach prioritises clean, maintainable code and seamless integrations with third-party services, ensuring applications run smoothly and efficiently.',
    projectNumber: '25',
  },
  {
    path: 'M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z',
    heading: 'Web Design',
    text: 'I combine creativity with technical expertise to create visually compelling, user-friendly interfaces. Working with tools like Figma and Adobe Photoshop, I ensure that every design element enhances the overall user experience.',
    projectNumber: '15',
  },
  {
    path: 'M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z',
    heading: 'Version Control and Cloud Deployment',
    text: 'Managing code effectively and ensuring scalability are central to my process. Using Git for version control and tools like Docker and Heroku for deployment, I streamline the transition from development to production.',
    projectNumber: '35',
  },
];
</script>
