import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;
  let containerVariants = {};
  let imageVariants = {};
  let leftCardVariants = {};
  let rightCardVariants = {};
  let listVariants = {};

  let textVariants = {};

  // Prevents animations on mobile
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
          delay: 0.5,
          ease: "easeInOut",
        },
      },
    };

    leftCardVariants = {
      hidden: { opacity: 0, x: "-10%" },
      visible: {
        opacity: 1,
        x: 0,

        transition: {
          duration: 0.5,
          delay: 1.3,
          ease: "easeInOut",
        },
      },
    };

    rightCardVariants = {
      hidden: { opacity: 0, x: "10%" },
      visible: {
        opacity: 1,
        x: 0,

        transition: {
          duration: 0.5,
          delay: 1.3,
          ease: "easeInOut",
        },
      },
    };

    listVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,

        transition: {
          duration: 0.5,
          delay: 1.8,
          ease: "easeInOut",
        },
      },
    };
  } else {
    imageVariants = {
      hidden: { opacity: 0, y: "5%"},
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
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
          delay: 1.3,
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
          delay: 1.3,
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
          class="relative bg-[url('../public/Images/portfolio-thumbnail.webp')] md:bg-none bg-fit bg-no-repeat bg-center shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:shadow-none md:flex md:flex-row md:space-x-5 hover:cursor-pointer"
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
                src="../Images/portfolio-thumbnail.webp"
                alt="Featured project"
                class="rounded max-w-[600px]"
              ></img>
            </div>
          </motion.div>

          {/* Project information */}
          <div class="p-5 sm:px-10 md:px-0 sm:py-14 md:py-10 backdrop-brightness-[0.3] md:backdrop-brightness-100 md:z-10 md:w-2/5 md:text-right">
            <motion.div variants={rightCardVariants}>
              <p class="text-primary">Personal Site</p>
              <h3 class="mb-5 font-2xl font-semibold text-primary-text hover:text-primary transition duration-300 ease-in-out">Portfolio Website</h3>

              <p class="bg-none md:bg-quaternary md:pl-10 pr-5 sm:pt-5 pb-5 md:-ml-32 md:shadow-md md:rounded-sm text-gray-300">
                My website showcasing projects I've created as well as a hub for marketing and contact.
                Specifically, my first version of the portfolio site and how Ive adapted the project since then.
              </p>
            </motion.div>

            {/* Stack list */}
            <motion.ul
              variants={listVariants}
              class="flex flex-col flex-wrap gap-y-2 sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-5 md:justify-end sm:pt-5 md:-ml-32"
            >
              <li>Handlebars/React</li>
              <li>ExpressJS</li>
              <li>NodeJS</li>
              <li>CSS/Tailwind</li>
            </motion.ul>
          </div>
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
        class="relative bg-[url('../public/Images/one-messaging-thumbnail.webp')] md:bg-none bg-fit bg-no-repeat bg-center shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:shadow-none md:flex md:flex-row md:space-x-5 hover:cursor-pointer"
      >
        {/* Project information */}
        <div class="p-5 sm:px-10 md:px-0 sm:py-14 md:py-10 backdrop-brightness-[0.3] md:backdrop-brightness-100 md:z-20 md:w-2/5">
          <motion.div variants={leftCardVariants}>
            <p class="text-primary">Messaging Project</p>
            <h3 class="mb-5 font-2xl font-semibold text-primary-text hover:text-primary transition duration-300 ease-in-out">One messaging project</h3>

            <p class="bg-none md:bg-quaternary md:px-5 sm:pt-5 pb-5 md:-mr-32 md:shadow-md md:rounded-sm text-gray-300">
              A realtime messaging app I made in my second year of University.
              This was project portion of my research into the advancement web communication systems.
            </p>
          </motion.div>

          {/* Stack list */}
          <motion.ul
            variants={listVariants}
            class="flex flex-col flex-wrap gap-y-2 sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-5 sm:pt-5 md:-mr-32"
          >
            <li>Handlebars</li>
            <li>ExpressJS</li>
            <li>NodeJS</li>
            <li>SocketIO</li>
            <li>SQLite</li>
          </motion.ul>
        </div>

        {/* Image */}
        <motion.div
        variants={imageVariants}
        class="hidden md:block md:w-3/5 md:relative md:overflow-hidden"
        >
          <div class="hover:scale-105 transition duration-500 ease-in-out">
            {/* Image overlay */}
            <div class="absolute bg-primary w-full h-full z-10 opacity-30 md:hover:opacity-0 transition duration-500 ease-in-out"></div>

            <img
              src="../Images/one-messaging-thumbnail.webp"
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
      <div class="space-y-3 mx-auto">
        <h2 class="font-semibold text-4xl text-center">Featured Projects</h2>
        <div class="w-48 h-1 bg-primary mx-auto"></div>
      </div>

      {/* Project cards */}
      <div class="mt-12 space-y-10 lg:space-y-24">
        <AlignedRightCard />
        <AlignedLeftCard />
      </div>
    </>
  );
};