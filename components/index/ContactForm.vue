<template>
  <div class="flex max-lg:flex-col max-lg:space-y-16 lg:space-x-10">
    <div class="w-full lg:w-1/2">
      <SectionHeading heading="Contact" />

      <p class="text-gray-400">
        Based on South West England, I'm always open to exploring new opportunities and collaborations.
      </p>

      <p class="mt-4 text-gray-400">
        Please don't hesitate to contact me through this form or my
        <a href="https://www.linkedin.com/in/josh-haywood" class="font-semibold text-primary hover:underline">
          LinkedIn profile.
        </a>
        I will endeavour to reply as soon as possible.
      </p>

      <!-- Contact Buttons -->
      <div
        class="flex max-sm:flex-col lg:flex-col xl:flex-row space-y-5 sm:space-y-0 lg:space-y-5 xl:space-y-0 sm:space-x-5 lg:space-x-0 xl:space-x-5 pt-8"
      >
        <a href="https://www.linkedin.com/in/josh-haywood" class="w-full sm:w-3/5 xl:w-2/5">
          <button
            class="w-full flex space-x-5 items-center px-5 py-2.5 ring-primary ring-opacity-40 transition-colors bg-tertiary hover:ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-primary">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>

            <label class="pt-1 font-semibold text-sm text-gray-400 cursor-pointer">Josh Haywood</label>
          </button>
        </a>

        <a href="mailto:joshhaywood025@gmail.com" class="w-full sm:w-3/5">
          <button
            class="w-full flex space-x-5 items-center px-5 py-2.5 ring-primary ring-opacity-40 transition-colors bg-tertiary hover:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <label class="pt-1 font-semibold text-sm text-gray-400 cursor-pointer">joshhaywood025@gmail.com</label>
          </button>
        </a>
      </div>
    </div>

    <!-- Form -->
    <form
      class="w-full lg:w-3/5 flex flex-col space-y-4"
      action="https://formsubmit.co/joshhaywood025@gmail.com"
      method="POST"
    >
      <div class="space-y-2">
        <label class="text-sm font-bold text-white">Name</label>
        <input
          class="w-full px-3 py-2 text-sm text-gray-400 rounded shadow bg-tertiary focus:outline-none"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-bold text-white">Email</label>
        <input
          class="w-full px-3 py-2 text-sm text-gray-400 rounded shadow bg-tertiary focus:outline-none"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-bold text-white">Message</label>
        <textarea
          class="w-full px-3 py-2 text-sm text-gray-400 rounded shadow bg-tertiary focus:outline-none"
          name="message"
          placeholder="Message"
          rows="8"
          required
        />
      </div>

      <input type="hidden" name="_next" value="https://www.joshhaywood-portfolio.com/message-sent" />

      <button
        class="w-1/4 mx-auto p-3 text-sm border-b-2 border-primary rounded text-white bg-tertiary transition-colors hover:bg-tertiary/70"
      >
        Submit
      </button>
    </form>
  </div>
</template>
