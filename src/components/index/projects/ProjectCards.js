import { motion } from "framer-motion";

import { GithubLink, DeployLink } from "./SocialLinks";

const projectCards = [
  {
    projectName: "portfolio",
    projectLink: "https://www.joshhaywood-portfolio.com/",
    repoLink: "https://github.com/JoshHaywood/portfolio-website",
    heading: "Personal Portfolio Website",
    text: "A website showcasing a curated selection of my projects and providing easy access to my contact information for potential employers.",

    technologies: [
      {
        item: "React",
      },
      {
        item: "TailwindCSS",
      },
      {
        item: "Framer Motion",
      },
    ],
  },
  {
    projectName: "tech-terminus",
    projectLink: "http://www.tech-terminus.me/",
    repoLink: "https://github.com/JoshHaywood/tech-terminus",
    heading: "Ecommerce Website",
    text: "An Ecommerce website that I developed during my research and development dissertation, showcasing standard ecommerce features using a restful API.",

    technologies: [
      {
        item: "React",
      },
      {
        item: "Express",
      },
      {
        item: "MySQL",
      },
    ],
  },
  {
    projectName: "arduino",
    projectLink: "/error",
    repoLink: "https://github.com/JoshHaywood/arduino-project",
    heading: "Arduino Unity Game Controller",
    text: "An interactive game and controller built with Arduino technology, showcasing my ability to merge physical components with game engines.",

    technologies: [
      {
        item: "Unity",
      },
      {
        item: "Uduino",
      },
      {
        item: "C#",
      },
    ],
  },
  {
    projectName: "student-survival-store",
    projectLink: "/error",
    repoLink: "https://github.com/JoshHaywood/student-survival-store",
    heading: "SaaS Student Survival Store",
    text: "A group project that involved creating a software as a service (SaaS) product utilizing a monthly subscription model.",

    technologies: [
      {
        item: "React",
      },
      {
        item: "Express",
      },
      {
        item: "Sqlite3",
      },
    ],
  },
  {
    projectName: "one-messaging",
    projectLink: "/error",
    repoLink: "https://github.com/JoshHaywood/one-messaging",
    heading: "Real-time Messaging App",
    text: "A real-time messaging app developed during my second year of university, demonstrating my interest in web communication systems.",

    technologies: [
      {
        item: "Handlebars",
      },
      {
        item: "Express",
      },
      {
        item: "Socket.io",
      },
    ],
  },
  {
    projectName: "esports-center",
    projectLink: "/error",
    repoLink: "https://github.com/JoshHaywood/esports-center",
    heading: "Esports Stats Tracking Tool",
    text: "A statistics tracking tool for Esports, which I led as the project manager, displaying my leadership and interest in the rising Esports industry.",

    technologies: [
      {
        item: "React",
      },
      {
        item: "Express",
      },
      {
        item: "MySQL",
      },
    ],
  },
];

export default function ProjectCards(props) {
  const { sidebar, setSidebar, setProjectName } = props;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const listVariants = {
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
      id="project-cards"
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
        <h3 class="mb-3 text-2xl font-semibold text-white">
          Other Notable Projects
        </h3>

        <a
          href="https://github.com/JoshHaywood?tab=repositories"
          class="font-normal text-primary hover:underline"
        >
          View all projects
        </a>
      </motion.div>

      {/* Project cards */}
      <div class="space-y-4 sm:space-y-0 sm:grid grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-4">
        {projectCards.map((card, index) => (
          <div
            key={index}
            class="hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <motion.div
              variants={listVariants}
              class="shadow-lg rounded bg-tertiary "
            >
              <div id="project-card">
                <div class="relative pt-5 pb-16 px-5 md:pb-5 lg:pb-60 h-full sm:h-[350px] md:h-[325px] w-full">
                  {/* Icons */}
                  <div class="flex justify-between pt-4">
                    {/* Project link */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      alt="Folder icon"
                      onClick={() => {
                        setSidebar(!sidebar);
                        setProjectName(card.projectName);
                      }}
                      class="h-9 w-9 fill-primary hover:cursor-pointer"
                    >
                      {/* Attribution: https://fontawesome.com/icons/folder?s=regular */}
                      <path d="M447.1 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.66-64 64v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C511.1 124.7 483.3 96 447.1 96zM463.1 416c0 8.824-7.178 16-16 16h-384c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L255.1 144h192c8.822 0 16 7.176 16 16V416z" />
                    </svg>

                    {/* Media links */}
                    <div class="flex flex-row items-center space-x-2">
                      <GithubLink
                        link={card.repoLink}
                        width="1.25rem"
                        height="1.25rem"
                      />
                      <DeployLink
                        link={card.projectLink}
                        width="1.25rem"
                        height="1.25rem"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    onClick={() => {
                      setSidebar(!sidebar);
                      setProjectName(card.projectName);
                    }}
                    class="space-y-4 lg:flex flex-col hover:text-primary hover:cursor-pointer"
                  >
                    <h4 class="mt-5 md:mt-8 font-semibold text-xl text-gray-200 transition duration-300 ease-in-out">
                      {card.heading}
                    </h4>

                    <p class="text-gray-400">{card.text}</p>
                  </div>

                  {/* Technologies list */}
                  <ul class="absolute bottom-5 left-5 flex flex-row space-x-5 mt-8">
                    {card.technologies.map((tech, index) => (
                      <li key={index}>
                        <div
                          onClick={() => {
                            setSidebar(!sidebar);
                          }}
                          class="text-sm text-gray-500 hover:cursor-pointer"
                        >
                          {tech.item}
                        </div>
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
}
