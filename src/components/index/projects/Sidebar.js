import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import projects from "../../../data/projects";

import { GithubLink, DeployLink } from "./SocialLinks";
import Button from "@mui/material/Button";

export default function Sidebar(props) {
  const { sideBar, setSideBar, projectName } = props;

  const [enlargeImage, setEnlargeImage] = useState(false);

  return (
    <AnimatePresence>
      {/* Image Enlarger */}
      {enlargeImage && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-50"
          onClick={() => setEnlargeImage(false)}
        >
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            src={
              projects.find((project) => project.projectName === projectName)
                .projectImage
            }
            alt="Project"
            className="w-full md:w-[50%] m-5 sm:m-0 h-auto"
          />
        </div>
      )}

      {sideBar &&
        projects.map((project) => {
          return (
            project.projectName === projectName && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                key={project.projectName}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="z-40 fixed top-0 bottom-0 right-0 w-full sm:w-[550px] p-5 sm:p-10 overflow-y-scroll bg-secondary"
              >
                {/* Navigation */}
                <div className="z-40 flex flex-row justify-between">
                  {/* Attribution: https://heroicons.com/ */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    onClick={() => {
                      setSideBar(false);
                    }}
                    className="w-6 h-6 text-gray-400 hover:text-primary hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {/* Media links */}
                  <div className="flex flex-row items-center space-x-2">
                    <GithubLink
                      link={project.repoLink}
                      width="1.25rem"
                      height="1.25rem"
                    />
                    <DeployLink
                      link={project.deployLink}
                      width="1.25rem"
                      height="1.25rem"
                    />
                  </div>
                </div>

                {/* Project details */}
                <div className="mt-16">
                  <h1 className="text-2xl font-bold tracking-wide text-primary">
                    {project.heading}
                  </h1>

                  <div className="mt-2 text-gray-400">{project.tagline}</div>

                  <div className="mt-6 overflow-hidden rounded-lg">
                    <div className="hover:scale-105 transition duration-300 ease-in-out">
                      <img
                        src={project.projectImage}
                        alt="Project"
                        onClick={() => setEnlargeImage(true)}
                        className="w-full hover:cursor-pointer"
                      />
                    </div>
                  </div>

                  <h2 className="mt-6 text-lg font-semibold text-white">
                    Overview
                  </h2>

                  <p className="mt-2 text-gray-400">{project.overview}</p>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    Technologies
                  </h3>

                  <div className="mt-1 flex flex-row flex-wrap">
                    {project.structure.map((tech) => {
                      return (
                        <div
                          key={tech}
                          className="text-sm p-2 mr-2 mt-2 rounded bg-tertiary text-gray-400"
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>

                  <h4 className="mt-6 text-lg font-semibold text-white">
                    Role
                  </h4>

                  <p className="mt-2 text-gray-400">{project.role}</p>

                  {/* View project button */}
                  {/* If deployLink is '/error', then the button will not be rendered */}
                  {project.deployLink !== "/error" && (
                    <a href={project.deployLink}>
                      <Button
                        sx={{
                          marginTop: "1.5rem",
                          bgcolor: "#1f2335",
                          width: "100%",
                          padding: "0.75rem 1.5rem",
                          color: "white",
                          textTransform: "none",

                          ":hover": {
                            bgcolor: "#1f2335",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        View Project
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>
            )
          );
        })}
    </AnimatePresence>
  );
}
