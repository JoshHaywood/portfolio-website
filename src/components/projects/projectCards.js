import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projectCards = [
  {
    cardPath: '/projects/portfolio',
    projectLink: 'https://www.joshhaywood-portfolio.com/',
    repoLink: 'https://github.com/JoshHaywood/portfolio-website',
    heading: 'Personal Portfolio Website',
    text: 'A website showcasing a curated selection of my projects and providing easy access to my contact information for potential employers.',
    link: '/projects/portfolio',

    technologies: [
      {
        item: 'React',
      },
      {
        item: 'TailwindCSS',
      },
      {
        item: 'Framer Motion',
      },
    ],
  },
  {
    cardPath: '/projects/arduino',
    projectLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/arduino-project',
    heading: 'Arduino Unity Game Controller',
    text: 'An interactive game and controller built with Arduino technology, showcasing my ability to merge physical components with game engines.',
    link: '/projects/arduino',

    technologies: [
      {
        item: 'Unity',
      },
      {
        item: 'Uduino',
      },
      {
        item: 'C#',
      },
    ],
  },
  {
    cardPath: '/projects/student-survival-store',
    projectLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/student-survival-store',
    heading: 'SaaS Student Survival Store',
    text: 'A group project that involved creating a software as a service (SaaS) product utilizing a monthly subscription model.',
    link: '/projects/student-survival-store',

    technologies: [
      {
        item: 'React',
      },
      {
        item: 'Express',
      },
      {
        item: 'Sqlite3',
      },
    ],
  },
  {
    cardPath: '/projects/one-messaging',
    projectLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/one-messaging',
    heading: 'Real-time Messaging App',
    text: 'A real-time messaging app developed during my second year of university, demonstrating my interest in web communication systems.',
    link: '/projects/one-messaging',

    technologies: [
      {
        item: 'Handlebars',
      },
      {
        item: 'Express',
      },
      {
        item: 'Socket.io',
      },
    ],
  },
  {
    cardPath: '/projects/esports-center',
    projectLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/esports-center',
    heading: 'Esports Stats Tracking Tool',
    text: 'A statistics tracking tool for Esports, which I led as the project manager, displaying my leadership and interest in the rising Esports industry.',
    link: '/projects/esports-center',

    technologies: [
      {
        item: 'React',
      },
      {
        item: 'Express',
      },
      {
        item: 'MySQL',
      },
    ],
  },
  {
    cardPath: '/projects/game-review',
    projectLink: 'https://game-review-application.herokuapp.com/',
    repoLink: 'https://github.com/JoshHaywood/game-review-app',
    heading: 'Video Game Review Platform',
    text: 'A web project that allows users to review recently released video games, showcasing my proficiency in functional-based React and web design.',
    link: '/projects/game-review',

    technologies: [
      {
        item: 'React',
      },
      {
        item: 'TailwindCSS',
      },
    ],
  },
];

export default function ProjectCards() {
  //Animation variants
  let containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  let listVariants = {
    hidden: { opacity: 0, y: "5%" },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: "5%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        class="mt-20 xl:mt-0 mb-12 mx-auto text-center"
      >
        <h3 class="mb-3 font-2xl font-semibold text-primary-text">
          Other Notable Projects
        </h3>

        <a
          href="https://github.com/JoshHaywood?tab=repositories"
          class="font-normal text-primary hover:underline"
        >
          View the full list
        </a>
      </motion.div>

      {/* Project cards */}
      <div class="space-y-4 sm:space-y-0 sm:grid grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-4">
        {projectCards.map((card, index) => (
          <div class="hover:-translate-y-2 transition duration-300 ease-in-out">
            <motion.div
              key={index}
              variants={listVariants}
              class="shadow-lg rounded bg-tertiary "
            >
              <Link
                id="projectCard"
                to={card.cardPath}
                onClick={() => {document.documentElement.scrollTop = 0}}
              >
                <div class="relative px-5 py-5 lg:pb-60 h-full md:h-[325px] w-full">
                  {/* Icons */}
                  <div class="flex justify-between pt-4">
                    {/* Project link */}
                    <Link
                      to={card.cardPath}
                      onClick={() => {
                        document.documentElement.scrollTop = 0;
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        alt="Folder icon"
                        class="h-9 w-9 fill-primary"
                      >
                        {/* Attribution: https://fontawesome.com/icons/folder?s=regular */}
                        <path d="M447.1 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.66-64 64v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C511.1 124.7 483.3 96 447.1 96zM463.1 416c0 8.824-7.178 16-16 16h-384c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L255.1 144h192c8.822 0 16 7.176 16 16V416z" />
                      </svg>
                    </Link>

                    <div class="flex flex-row items-center space-x-2">
                      {/* Github link */}
                      <a
                        href={card.repoLink}
                        class={`${
                          card.repoLink !== "/error" ? "block" : "hidden"
                        }`}
                      >
                        {/* Attribution: https://fontawesome.com/icons/github?s=brands */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          alt="Github logo"
                          class="h-5 w-5 text-gray-400 hover:text-primary transition duration-300 ease-in-out"
                        >
                          <path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>

                      {/* Live project link */}
                      <a
                        href={card.projectLink}
                        class={`${
                          card.projectLink !== "/error" ? "block" : "hidden"
                        }`}
                      >
                        {/* Attribution: https://heroicons.com */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-5 w-5 text-gray-400 hover:text-primary transition duration-300 ease-in-out"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Text */}
                  <div class="space-y-4 mt-8 mb-14 md:mb-0 lg:flex flex-col">
                    <h4 class="font-semibold text-xl text-gray-200 transition duration-300 ease-in-out">
                      {card.heading}
                    </h4>
                    <p class="text-gray-400">{card.text}</p>
                  </div>

                  {/* Technologies list */}
                  <ul class="absolute bottom-5 left-5 flex flex-row space-x-5 mt-8">
                    {card.technologies.map((tech, index) => (
                      <li key={index}>
                        <span class="text-sm text-gray-500">{tech.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};