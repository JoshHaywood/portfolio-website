import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Heading from "../../Heading";
import { GithubLink, DeployLink } from "./SocialLinks"
import ProjectCards from "./ProjectCards";

export default function Projects() {
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;
  const isSmallMobile = window.innerWidth < 450;
  let { containerVariants = {}, imageVariants = {}, leftCardVariants = {}, rightCardVariants = {}, listVariants: technologiesVariants = {}} = {};

  // If isnt mobile add list animation
  if (!isMobile) {
    //Parent container that holds properties
    containerVariants = {
      hidden: {},
      visible: {},
    };

    //Individual component animations
    imageVariants = {
      hidden: { opacity: 0, y: "3%" },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 0.5,
          delay: 0.3,
          ease: "easeInOut",
        },
      },
    };

    leftCardVariants = {
      hidden: { opacity: 0, x: "-5%" },
      visible: {
        opacity: 1,
        x: 0,

        transition: {
          duration: 0.5,
          delay: 1.1,
          ease: "easeInOut",
        },
      },
    };

    rightCardVariants = {
      hidden: { opacity: 0, x: "5%" },
      visible: {
        opacity: 1,
        x: 0,

        transition: {
          duration: 0.5,
          delay: 1.1,
          ease: "easeInOut",
        },
      },
    };

    technologiesVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,

        transition: {
          duration: 0.5,
          delay: 1.5,
          ease: "easeInOut",
        },
      },
    };
  } else {
    containerVariants = {
      hidden: { opacity: 0, y: "5%" },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 1,
          delay: 0.3,
          ease: "easeInOut",
        },
      },
    };

    leftCardVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,

        transition: {
          duration: 0.5,
          delay: 1.1,
          ease: "easeInOut",
        },
      },
    };

    rightCardVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,

        transition: {
          duration: 0.5,
          delay: 1.1,
          ease: "easeInOut",
        },
      },
    };
  };

  // Right aligned card
  function AlignedRightCard() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onClick={() => navigate("/projects/portfolio")}
        class="relative bg-[url('../public/images/portfolio-thumbnail.webp')] md:bg-none bg-fit bg-no-repeat bg-center shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:shadow-none md:flex md:flex-row md:space-x-5 hover:cursor-pointer"
      >
        {/* Image */}
        <motion.div
          variants={imageVariants}
          class="hidden md:block md:w-3/5 md:relative md:overflow-hidden"
        >
          <div class="hover:scale-105 transition duration-500 ease-in-out">
            {/* Image overlay */}
            <div class="absolute bg-primary w-full h-full z-10 opacity-30 md:hover:opacity-0 transition duration-500 ease-in-out"></div>

            <img
              src="../images/portfolio-thumbnail.webp"
              alt="Featured project"
              class="rounded max-w-[600px]"
            ></img>
          </div>
        </motion.div>

        {/* Project information */}
        <motion.div
          variants={rightCardVariants}
          class="p-5 sm:px-5 md:px-0 sm:py-16 md:py-10 backdrop-brightness-[0.3] md:backdrop-brightness-100 md:z-10 md:w-2/5 md:text-right"
        >
          <p class="font-normal text-primary">Personal Site</p>
          <h3 class="mb-5 font-2xl font-semibold text-primary-text hover:text-primary transition duration-300 ease-in-out">
            Portfolio Website
          </h3>

          <p class="bg-none md:bg-quaternary md:pl-10 pr-5 sm:pt-5 pb-5 md:-ml-32 md:shadow-md md:rounded-sm text-gray-300">
            My website showcasing projects I have created and serves as a hub
            for marketing and contact. The includes my first version of the
            portfolio site and how I have adapted the project since then.
          </p>

          {/* Technologies */}
          <motion.div variants={technologiesVariants}>
            {/* Stack list */}
            <ul class="flex flex-row flex-wrap gap-x-2.5 sm:gap-x-0 sm:space-x-5 md:justify-end md:mt-5 md:-ml-32">
              <li>Handlebars/React</li>
              <li>ExpressJS</li>
              <li>NodeJS</li>
              <li>CSS/Tailwind</li>
            </ul>

            {/* Media links */}
            <div class="flex flex-row mt-5 md:justify-end space-x-2.5">
              <GithubLink link="https://github.com/JoshHaywood/portfolio-website" />
              <DeployLink link="https://www.joshhaywood-portfolio.com/" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  // Left aligned card
  function AlignedLeftCard() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onClick={() => navigate("/projects/one-messaging")}
        class="relative bg-[url('../public/images/one-messaging-thumbnail.webp')] md:bg-none bg-fit bg-no-repeat bg-center shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:shadow-none md:flex md:flex-row md:space-x-5 hover:cursor-pointer"
      >
        {/* Project information */}
        <motion.div
          variants={leftCardVariants}
          class="p-5 sm:px-5 md:px-0 sm:py-16 md:py-10 backdrop-brightness-[0.3] md:backdrop-brightness-100 md:z-20 md:w-2/5"
        >
          <p class="font-normal text-primary">Messaging Project</p>
          <h3 class="mb-5 font-2xl font-semibold text-primary-text hover:text-primary transition duration-300 ease-in-out">
            One messaging project
          </h3>

          <p class="bg-none md:bg-quaternary md:px-5 sm:pt-5 pb-5 md:-mr-32 md:shadow-md md:rounded-sm text-gray-300">
            A real-time messaging app during my second year of university as
            part of a research project on the advancement of web communication
            systems.
          </p>

          {/* Technologies */}
          <motion.div variants={technologiesVariants}>
            {/* Stack list */}
            <ul class="flex flex-row flex-wrap gap-x-2.5 sm:gap-x-0 sm:space-x-5 md:mt-5 md:-mr-32">
              <li>Handlebars</li>
              <li>ExpressJS</li>
              <li>NodeJS</li>
              <li>SocketIO</li>
              <li>SQLite</li>
            </ul>

            {/* Media links */}
            <div class="mt-5">
              <GithubLink link="https://github.com/JoshHaywood/one-messaging" />
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          class="hidden md:block md:w-3/5 md:relative md:overflow-hidden"
        >
          <div class="hover:scale-105 transition duration-500 ease-in-out">
            {/* Image overlay */}
            <div class="absolute bg-primary w-full h-full z-10 opacity-30 md:hover:opacity-0 transition duration-500 ease-in-out"></div>

            <img
              src="../images/one-messaging-thumbnail.webp"
              alt="Featured project"
              class="rounded max-w-[600px]"
            ></img>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: "5%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Heading heading={"Featured Projects"} />
      </motion.div>

      <div class="mt-12 space-y-10 lg:space-y-24">
        {/* Featured projects */}
        <AlignedRightCard />
        <AlignedLeftCard />

        {/* Project cards */}
        <ProjectCards />
      </div>
    </>
  );
};