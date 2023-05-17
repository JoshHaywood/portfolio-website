import { motion } from "framer-motion";

import Heading from "./Heading";

import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
      class="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-10"
    >
      <div class="w-full lg:w-[55%]">
        {/* Heading */}
        <Heading heading="Contact" />

        <p class="mt-12 text-gray-400">
          I am currently available for both project work and full-time
          employment. Currently im based in South West England with a GMT time
          zone, I am open to both remote and on-site opportunities.
        </p>

        <p class="mt-4 text-gray-400">
          Please don't hesitate to contact me through this online form or my{" "}
          <a
            href="https://www.linkedin.com/in/josh-haywood"
            class="font-semibold text-primary hover:underline"
          >
            LinkedIn profile
          </a>
          . I will endeavour to reply as soon as possible.
        </p>

        {/* Contact buttons */}
        <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row space-y-5 sm:space-y-0 lg:space-y-5 xl:space-y-0 sm:space-x-5 lg:space-x-0 xl:space-x-5 pt-8">
          <a
            href="https://www.linkedin.com/in/josh-haywood"
            class="w-full sm:w-3/5 xl:w-2/5"
          >
            <Button class="relative w-full flex flex-row space-x-5 items-center px-5 py-2.5 hover:ring ring-primary ring-opacity-40 transition duration-300 ease-in-out bg-tertiary">
              {/* Attribution: https://fontawesome.com/icons/linkedin-in?s=&f=brands */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-5 h-5 fill-primary"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>

              <label class="pt-1 font-semibold text-sm text-gray-400 hover:cursor-pointer">
                Josh Haywood
              </label>
            </Button>
          </a>

          <a href="mailto:joshhaywood025@gmail.com" class="w-full sm:w-3/5">
            <Button class="relative w-full flex flex-row space-x-5 items-center px-5 py-2.5 hover:ring ring-primary ring-opacity-40 transition duration-300 ease-in-out bg-tertiary">
              {/* Attribution: https://heroicons.com/ */}
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

              <label class="pt-1 font-semibold text-sm text-gray-400 hover:cursor-pointer">
                joshhaywood025@gmail.com
              </label>
            </Button>
          </a>
        </div>
      </div>

      {/* Form */}
      <form
        className="w-full lg:w-3/5 flex flex-col"
        action="https://formsubmit.co/joshhaywood025@gmail.com"
        method="POST"
      >
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-white">Name</label>
          <input
            class="w-full px-3 py-2 mb-3 text-sm text-gray-400 bg-tertiary rounded shadow focus:outline-none"
            type="text"
            autoComplete="off"
            placeholder="Name"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-white">Email</label>
          <input
            class="w-full px-3 py-2 mb-3 text-sm text-gray-400 bg-tertiary rounded shadow focus:outline-none"
            type="email"
            autoComplete="off"
            placeholder="Email"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-white">Message</label>
          <textarea
            class="w-full px-3 py-2 mb-3 text-sm text-gray-400 bg-tertiary rounded shadow focus:outline-none"
            type="text"
            autoComplete="off"
            placeholder="Message"
            rows={8}
            required
          />
        </div>

        <input
          type="hidden"
          name="_next"
          defaultValue="https://www.joshhaywood-portfolio.com/message-sent"
        />

        <Button
          type="submit"
          sx={{
            borderBottom: "2px solid #f2584c",
            width: "25%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#1f2335",
            color: "white",
            textTransform: "none",

            ":hover": {
              bgcolor: "rgba(242, 88, 76, 0.3)",
            },
          }}
        >
          Submit
        </Button>
      </form>
    </motion.div>
  );
}
