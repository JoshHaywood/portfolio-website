import { motion } from 'framer-motion';

import Button from '@mui/material/Button';

export default function Hero(props) {
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

  function ScrollTo() {
    const element = document.getElementById("scrollButton");
    element.scrollIntoView();
  };

  return (
    <div class="flex flex-col justify-center relative w-full sm:h-screen min-h-[770px]">
      {/* Background video, Attribution:https://pixabay.com/videos/circuit-electronics-digital-27725/ by motionstock */}
      <video
        autoPlay
        muted
        loop
        playsInline
        class="w-full flex-1 object-cover brightness-50 blur-sm"
        src="../videos/background.mp4"
        type="video/mp4"
      >
        Your browser does not support videos
      </video>

      <div class="absolute max-w-[1000px] flex-1 left-0 right-0 mx-auto px-5 xl:px-0 z-10 space-y-6 leading-10 sm:leading-none">
        {/* Heading text */}
        <div class="space-y-3 md:space-y-6">
          <motion.h1
            class="text-primary text-3xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: props.taglineDelay,
              ease: "easeInOut",
            }}
          >
            Hi, my name is
          </motion.h1>

          <motion.h2
            class="block md:text-5xl lg:text-6xl font-semibold"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: props.headingOneDelay,
              ease: "easeInOut",
            }}
          >
            Josh Haywood
          </motion.h2>

          <motion.h2
            class="block md:text-5xl lg:text-6xl font-semibold text-gray-400"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: props.headingTwoDelay,
              ease: "easeInOut",
            }}
          >
            An aspiring web developer
          </motion.h2>
          
          <motion.p
            class="text-xl max-w-[500px]"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: props.textDelay,
              ease: "easeInOut",
            }}
          >
            I am currently a Web Development student at{" "}
            <a id="heroLink" href="https://www.falmouth.ac.uk/">
              <span class="font-semibold text-primary text-xl">
                Falmouth University
              </span>
            </a>
            {" "}in my final year of a BSc. At present, I am focused on specializing in front-end development.
          </motion.p>
        </div>

        {/* Media Icons */}
        <motion.div
          class="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 space-x-6"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: props.textDelay,
            ease: "easeInOut",
          }}
        >
          <a href="https://github.com/JoshHaywood/">
            <div class="flex pr-[1.4rem] sm:pr-0">
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  border: "2px solid #181a1d",
                  backgroundColor: "#181a1d",
                  color: "white",
                  width: "175px",

                  ":hover": {
                    bgcolor: "rgba(24, 26, 29, 0.8)",
                  },
                }}
              >
                View my Github
              </Button>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/josh-haywood-b70a24233/">
            <div class="flex pr-[2.5rem] sm:pr-0">
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  border: "2px solid #4c6bc1",
                  color: "white",
                  width: "175px",

                  ":hover": {
                    bgcolor: "rgba(76, 107, 193, 0.3)",
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
        id="scrollButton"
        class="absolute bottom-0 mb-2 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: props.scrollButtonDelay,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={ScrollTo}
          class="font-medium text-xl hover:text-white transition duration-300 ease-in-out"
        >
          View more
        </button>
        <svg
          onClick={ScrollTo}
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
