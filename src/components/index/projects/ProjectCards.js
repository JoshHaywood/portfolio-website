import { motion } from "framer-motion";

import projects from "../../../data/projects";
import { GithubLink, DeployLink } from "./SocialLinks";

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
        className="mt-20 xl:mt-0 mb-12 mx-auto text-center"
      >
        <h3 className="mb-3 text-2xl font-semibold text-white">
          Other Notable Projects
        </h3>

        <a
          href="https://github.com/JoshHaywood?tab=repositories"
          className="font-normal text-primary hover:underline"
        >
          View all projects
        </a>
      </motion.div>

      {/* Project cards */}
      <div className="space-y-4 sm:space-y-0 sm:grid grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((card) => (
          <div
            key={card.projectName}
            className="hover:-translate-y-2 transition duration-300 ease-in-out"
          >
            <motion.div
              variants={listVariants}
              className="shadow-lg rounded bg-tertiary "
            >
              <div id="project-card">
                <div className="relative pt-5 pb-16 px-5 md:pb-5 lg:pb-60 h-full sm:h-[350px] md:h-[325px] w-full">
                  {/* Icons */}
                  <div className="flex justify-between pt-4">
                    {/* Project link */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      alt="Folder icon"
                      onClick={() => {
                        setSidebar(!sidebar);
                        setProjectName(card.projectName);
                      }}
                      className="h-9 w-9 fill-primary hover:cursor-pointer"
                    >
                      <path d="M447.1 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.66-64 64v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C511.1 124.7 483.3 96 447.1 96zM463.1 416c0 8.824-7.178 16-16 16h-384c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L255.1 144h192c8.822 0 16 7.176 16 16V416z" />
                    </svg>

                    {/* Media links */}
                    <div className="flex flex-row items-center space-x-2">
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
                    className="space-y-4 lg:flex flex-col hover:text-primary hover:cursor-pointer"
                  >
                    <h4 className="mt-5 md:mt-8 font-semibold text-xl text-gray-200 transition duration-300 ease-in-out">
                      {card.heading}
                    </h4>

                    <p className="text-gray-400">{card.previewText}</p>
                  </div>

                  {/* Structure list */}
                  <ul className="absolute bottom-5 left-5 flex flex-row space-x-5 mt-8">
                    {card.previewStructure.map((tech) => (
                      <li key={tech.item}>
                        <div
                          onClick={() => {
                            setSidebar(!sidebar);
                          }}
                          className="text-sm text-gray-500 hover:cursor-pointer"
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
