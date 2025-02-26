<template>
  <footer class="bg-tertiary">
    <div class="max-w-[1100px] mx-auto max-xl:px-5 py-5">
      <div class="flex max-md:flex-col py-8">
        <div class="w-full md:flex md:space-x-10 max-md:space-y-10">
          <!-- Branding -->
          <div class="md:w-1/3 -ml-6 px-6">
            <NuxtImg
              :src="src"
              alt="Logo"
              class="w-[185px] h-auto hover:cursor-pointer"
              @mouseenter="src = '/images/logo-hover.png'"
              @mouseleave="src = '/images/logo.png'"
              @click="scrollToTop"
            />

            <p class="mt-5 text-sm text-gray-400">Contact me via my social media or email for any inquiries.</p>

            <div class="flex space-x-5">
              <div v-for="(icon, index) in mediaIcons" :key="index" class="mt-2.5">
                <a :href="icon.path" :aria-label="icon.label">
                  <svg
                    class="w-4 h-4 fill-gray-400 hover:fill-gray-500 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path :d="icon.svg"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Columns -->
          <div class="md:w-2/3">
            <div class="sm:grid sm:gap-6 grid-cols-[0.3fr,0.4fr,0.3fr]">
              <div
                v-for="(column, columnIndex) in columns"
                :key="columnIndex"
                :class="columnIndex === 2 && 'sm:flex sm:flex-col sm:justify-end'"
              >
                <h4 class="max-sm:my-4 sm:mb-4 font-semibold text-gray-300">{{ column.heading }}</h4>

                <!-- Links -->
                <div
                  v-for="(link, linkIndex) in column.links"
                  :key="linkIndex"
                  class="mb-3 text-sm text-gray-400 cursor-pointer hover:underline"
                  @click="columnIndex === 0 ? useScrollTo().scrollTo(link.target) : store.setSidebar(link.label)"
                >
                  {{ link.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footnote -->
      <div class="flex justify-between py-5 border-t border-primary">
        <a href="https://www.joshhaywood-portfolio.com/" class="text-sm text-gray-400 hover:underline">
          © Josh Haywood {{ new Date().getFullYear() }}
        </a>

        <button class="flex items-center space-x-1" @click="scrollToTop">
          <span class="text-sm text-gray-400">Back To Top</span>

          <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-pointer">
            <g fill="none" transform="translate(2 2)" strokeWidth="2" class="stroke-gray-400 fill-none">
              <circle cx="8.5" cy="8.5" r="8" />
              <path d="m11.5 9.5-3-3-3 3" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const store = useProjectsStore();

const src = ref<string>('/images/logo.png');

const mediaIcons: { label: string; path: string; svg: string }[] = [
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/josh-haywood',
    svg: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
  },

  {
    label: 'GitHub',
    path: 'https://github.com/JoshHaywood',
    svg: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
  },
  {
    label: 'Gmail',
    path: 'mailto:joshhaywood025@gmail.com',
    svg: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z',
  },
];

const columns: { heading?: string; links: { label: string; target?: string }[] }[] = [
  {
    heading: 'Sections',
    links: [
      { label: 'About', target: 'about' },
      { label: 'Projects', target: 'projects' },
      { label: 'Contact', target: 'contact' },
    ],
  },
  {
    heading: 'Projects',
    links: [{ label: 'Customer Portal' }, { label: 'Automated CRM System' }, { label: 'Automated Prospecting Tool' }],
  },
  {
    links: [
      { label: 'Auction Platform' },
      { label: 'Organisational Energy Tracker' },
      { label: 'Personal Portfolio Website' },
    ],
  },
];

// Scroll to top
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>
