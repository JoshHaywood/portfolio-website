import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { GithubLink, DeployLink } from "./SocialLinks";
import Button from "@mui/material/Button";

const projects = [
  {
    projectName: 'portfolio',
    repoLink: 'https://github.com/JoshHaywood/portfolio-website',
    deployLink: 'https://www.joshhaywood-portfolio.com/',
    heading: 'Personal Portfolio Website',
    tagline: 'Highlighting my skills and projects',
    projectImage: '../images/portfolio-thumbnail.webp',
    overview: 'This project was a website that I created to use as a marketing tool to showcase my relevant experience and various projects that I have undertaken. The goal was to demonstrate my range of abilities to potential employers or people of interest, and to serve as a hub for my various social profiles on Github, LinkedIn, and email.',
    structure: ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js'],
    role: `I created a personal portfolio website to showcase my skills and experience to potential employers. I faced challenges with Handlebars and difficulties with the design of the page layouts, but overcame them by converting to React, researching other developers' work and using Framer Motion for animations. The end result was a sleek and visually appealing website that effectively highlighted my abilities and experience.`,
  },
  {
    projectName: 'arduino',
    repoLink: 'https://github.com/JoshHaywood/arduino-project',
    deployLink: '/error',
    heading: 'Arduino Unity Game Controller',
    tagline: 'Merging physical and digital gaming',
    projectImage: '../images/unity-thumbnail.webp',
    overview: 'This project involved creating an Arduino game controller and accompanying Unity game as part of my first year of university. It was designed to introduce me to Arduino and its Unity plugin, Udunio, and help me improve my knowledge of Unity. I created a technical poster detailing the project and its structure, which included Unity, Arduino/Uduino, and C#.',
    structure: ['Unity', 'Arduino / Uduino', 'C#'],
    role: 'I created an Arduino game controller and Unity game to improve my knowledge of Unity and Arduino. The goal was to create an interactive game using Arduino components. I faced issues with Uduino syntax and components compatibility, but overcame them by researching and experimenting with different options. The final product was a unique and engaging game that effectively utilized the capabilities of the Arduino controller.',
  },
  {
    projectName: 'student-survival-store',
    repoLink: 'https://github.com/JoshHaywood/student-survival-store',
    deployLink: '/error',
    heading: 'SaaS Student Survival Store',
    tagline: 'Surviving student life, made easy',
    projectImage: '../images/student-survival-store-index.webp',
    overview: "This was a group project in my second year of university that centered around a business that provided a subscription-based box of student-related supplies. My role was front-end development and documentation handling. I maintained our team's agile approach by documenting each stand-up's notes, targets, target status, and any issues that occurred for that week. This project was my first time using React, so my development was not as substantial as normal, but I did create components such as the mobile header and implemented the user profile modal.",
    structure: [ 'HTML', 'React', 'Tailwinds CSS', 'Javascript', 'Express.js', 'SQLite'],
    role: 'I helped create an e-commerce website to sell student survival kits. My role was focused on the development and design of the website, as well as working with a team to create the product offerings. One of the main challenges was ensuring a smooth and user-friendly checkout process, which was addressed by implementing a variety of payment options and testing them thoroughly.',
  },
  {
    projectName: 'one-messaging',
    repoLink: 'https://github.com/JoshHaywood/one-messaging',
    deployLink: '/error',
    heading: 'Real-Time Messaging App',
    tagline: 'Real-time communication, at your fingertips',
    projectImage: '../images/one-messaging-login-thumbnail.webp',
    overview: 'This was an individual project in my second year of university that focused on creating a distributed system, which is an application that is distributed across multiple systems. In addition to creating the project, I was also required to provide a technical poster detailing the project and a structured report documenting the creation process. The project I chose to create was a real-time messaging app.',
    structure: [ 'HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js', 'Socket.io', 'SQLite' ],
    role: `I worked on a messaging app that aimed to bring all communication platforms in one place. My role included the development of the app's core functionality and implementing a clean and intuitive user interface. One of the challenges faced was creating compatibility with a variety of different messaging platforms, which was overcome by researching and implementing APIs.`,
  },
  {
    projectName: 'esports-center',
    repoLink: 'https://github.com/JoshHaywood/esports-center',
    deployLink: '/error',
    heading: 'Esports Stats Tracking Website',
    tagline: 'Leading the way in Esports statistics',
    projectImage: '../images/esports-center-hero-thumbnail.webp',
    overview: 'This was a group project in my second year with the same team as the Student Survival Store project. Similarly to that project, the Esports Center was first presented through a business plan in which each team member pitched their own ideas. My own pitch was for the Esports Center, a statistics tracking website focused on the sporting genre of esports, or the competitive play of video games. My role in the project was front-end development and design, as well as documentation.',
    structure: [ 'HTML', 'React', 'CSS', 'Material UI', 'Javascript', 'Express.js', 'MySQL' ],
    role: `I assisted in creating a web platform for a local e-sport center, where users can find information about tournaments and events, as well as register and pay for them online. My role included working on the design and development of the website, as well as implementing a system for tournament registration and payment. One of the main challenges was ensuring the security and reliability of the payment system, which was addressed by using a well-known and secure payment gateway.`,
  },
  {
    projectName: 'game-review',
    repoLink: 'https://github.com/JoshHaywood/game-review-app',
    deployLink: 'https://game-review-application.herokuapp.com/',
    heading: 'Video Game Review Platform',
    tagline: 'Reviewing the latest games, together',
    projectImage: '../images/review-thumbnail.webp',
    overview: 'This was a side project I worked on aimed at creating a reviewing website where I could review video games of my choice.',
    structure: ['HTML', 'React', 'CSS', 'Tailwind', 'Javascript'],
    role: 'I developed a website for a game review blog, where users can find reviews, trailers, and information about the latest games. My responsibilities included designing and developing the website, as well as creating the content for the blog. One of the challenges was creating an efficient system for displaying and sorting the large amount of game information, which was addressed by implementing a search and filter feature.',
  },
];

export default function Sidebar(props) {
  const navigate = useNavigate();
  const { sideBar, setSideBar, projectName } = props;

  return (
    <AnimatePresence>
      {sideBar && (
        projects.map((project, index) => {
          return (
            project.projectName === projectName && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%"}}
                key={index}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                class="z-50 fixed top-0 bottom-0 right-0 w-full sm:w-[550px] p-10 overflow-y-scroll bg-tertiary shadow-[0px_6px_4px_0px_rgb(76,107,193)]"
              >
                {/* Navigation */}
                <div class="z-50 flex flex-row justify-between">
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
                    class="w-6 h-6 text-gray-600 hover:text-gray-400 hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {/* Media links */}
                  <div class="flex flex-row items-center space-x-2">
                    <GithubLink link={project.repoLink} width="1.25rem" height="1.25rem" />
                    <DeployLink link={project.deployLink} width="1.25rem" height="1.25rem"
                    />
                  </div>
                </div>

                {/* Project details */}
                <div class="mt-16">
                      <h1 class="text-2xl font-bold tracking-wide text-primary">
                        {project.heading}
                      </h1>

                      <div class="mt-4 text-gray-500">
                        {project.tagline}
                      </div>

                      <img
                        src={project.projectImage}
                        alt="Project"
                        class="w-full mt-6 rounded-lg"
                      />

                      <h2 class="mt-6 text-lg font-medium text-white">
                        Overview
                      </h2>

                      <p class="mt-2 text-gray-500">
                        {project.overview}
                      </p>

                      <h3 class="mt-6 text-lg font-medium text-white">
                        Technologies
                      </h3>

                      <div class="mt-1 flex flex-row flex-wrap text-gray-400">
                        {project.structure.map((tech, index) => {
                          return (
                            <div key={index} class="text-sm p-2 mr-2 mt-2 rounded bg-gray-800">
                              {tech}
                            </div>
                          );
                        })}
                      </div>

                      <h4 class="mt-6 text-lg font-medium text-white">
                        Role
                      </h4>

                      <p class="mt-2 text-gray-500">
                        {project.role}
                      </p>

                      {/* View project button */}
                      {/* If deployLink is '/error', then the button will not be rendered */}
                      {project.deployLink !== '/error' && 
                      (
                        <Button
                          onClick={() => {
                            navigate(project.deployLink);
                            document.documentElement.scrollTop = 0;
                          }}
                          sx={{
                            marginTop: "1.5rem",
                            bgcolor: "#1f2937",
                            width: "100%",
                            padding: "0.75rem 1.5rem",
                            color: "white",
                            textTransform: "none",

                            ":hover": {
                              bgcolor: "#1f2937",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          View Project
                        </Button>
                      )}
                </div>
              </motion.div>
            )
          )
        }
      ))}
    </AnimatePresence>
  );
}
