import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { GithubLink, DeployLink } from "./SocialLinks"

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
              <div id="projectCard">
                <div class="relative pt-5 pb-16 px-5 md:pb-5 lg:pb-60 h-full sm:h-[350px] md:h-[325px] w-full">
                  {/* Icons */}
                  <div class="flex justify-between pt-4">
                    {/* Project link */}
                    <Link
                      to={card.cardPath}
                      onClick={() => {document.documentElement.scrollTop = 0}}
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

                    {/* Media links */}
                    <div class="flex flex-row items-center space-x-2">
                      <GithubLink link={card.repoLink} width="1.25rem" height="1.25rem" />
                      <DeployLink link={card.projectLink} width="1.25rem" height="1.25rem" />
                    </div>
                  </div>

                  {/* Text */}
                  <Link 
                    to={card.cardPath}
                    onClick={() => {document.documentElement.scrollTop = 0}} 
                    class="space-y-4 lg:flex flex-col"
                  >
                    <h4 class="mt-5 md:mt-8 font-semibold text-xl text-gray-200 transition duration-300 ease-in-out">
                      {card.heading}
                    </h4>

                    <p class="text-gray-400">{card.text}</p>
                  </Link>

                  {/* Technologies list */}
                  <ul class="absolute bottom-5 left-5 flex flex-row space-x-5 mt-8">
                    {card.technologies.map((tech, index) => (
                      <li key={index}>
                        <Link to={card.cardPath} class="text-sm text-gray-500">{tech.item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};