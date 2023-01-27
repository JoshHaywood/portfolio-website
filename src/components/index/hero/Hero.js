import { motion } from "framer-motion";

import ResizeHandler from "../../utils/resizeHandler";
import Particles from "./Particles";
import ScrollTo from "../../utils/scrollTo";
import Button from "@mui/material/Button";

export default function Hero() {
  const isMobile = ResizeHandler(450);

  //Animation Variants
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: "50%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div class="flex flex-col justify-center relative mx-auto">
      {/* Background animation */}
      <Particles />

      <div class="absolute lg:max-w-[1100px] lg:left-0 lg:right-0 mx-auto px-5 md:px-10 xl:px-0 z-10 space-y-5">
        {/* Heading text */}
        <div>
          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: 0.9,
              ease: "easeInOut",
            }}
            class="tracking-wide font-normal text-lg text-primary"
          >
            Hi, my name is
          </motion.h1>

          <motion.h2
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: 1.1,
              ease: "easeInOut",
            }}
            class="block mt-4 tracking-wide text-4xl sm:text-5xl lg:text-6xl font-semibold text-white"
          >
            Josh Haywood
          </motion.h2>

          <motion.h2
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: 1.3,
              ease: "easeInOut",
            }}
            class="block mt-4 tracking-wide text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-400"
          >
            An aspiring web developer
          </motion.h2>

          <motion.p
            class="mt-6 tracking-wide text-xl max-w-lg text-gray-400"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: 1.5,
              ease: "easeInOut",
            }}
          >
            I am currently a Web Development student at{" "}
            <a id="hero-link" href="https://www.falmouth.ac.uk/">
              <span class="font-semibold text-xl text-primary hover:underline">
                Falmouth University
              </span>
            </a>{" "}
            in my final year of a BSc. At present, I am focused on specializing
            in full-stack JavaScript development.
          </motion.p>
        </div>

        {/* Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.5,
            ease: "easeInOut",
          }}
          class={`${isMobile ? "flex flex-col space-y-5" : "flex flex-row space-x-5"}`}
        >
          <a href="https://github.com/JoshHaywood/">
            <div class="flex sm:pr-0">
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  border: "4px solid #1f2335",
                  backgroundColor: "#1f2335",
                  color: "white",
                  width: isMobile ? "100%" : "175px",

                  ":hover": {
                    bgcolor: "rgba(31, 35, 53, 0.8)",
                  },
                }}
              >
                View my Github
              </Button>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/josh-haywood-b70a24233/">
            <div class="flex">
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  border: "2px solid #f2584c",
                  color: "white",
                  width: isMobile ? "100%" : "175px",

                  ":hover": {
                    bgcolor: "rgba(242, 88, 76, 0.3)",
                  },
                }}
              >
                View my Linked In
              </Button>
            </div>
          </a>
        </motion.div>
      </div>

      <motion.div
        class="absolute bottom-0 mb-2 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 1.7,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={() => {ScrollTo({target: 'scrollButton', offset: 0, mobileOffset: 0 })}}
          class="font-medium text-xl text-gray-400 hover:text-white transition duration-300 ease-in-out"
        >
          View more
        </button>
        <svg
          onClick={() => {ScrollTo({target: 'scrollButton', offset: 0, mobileOffset: 0})}}
          class="h-5 w-5 fill-primary mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* Attribution: https://fontawesome.com/icons/chevron-down?s=solid&f=classic */}
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </motion.div>
    </div>
  );
};