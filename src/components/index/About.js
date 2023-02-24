import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion";

import Heading from "./Heading";
import { ScrollTo } from "../utils/scrollHandler";

const technologies = [
  {
    listColumn: [
      { label: 'React' },
      { label: 'NextJS' },
      { label: 'SASS' },
    ],
  },
  {
    listColumn: [
      { label: 'TailwindCSS' },
      { label: 'TypeScript' },
      { label: 'Node.js' },
    ],
  },
  {
    listColumn: [
      { label: 'Web Sockets' },
      { label: 'Express' },
      { label: 'Heroku' },
    ],
  },
];

export default function About(props) {
  const { sidebar, setSidebar, setProjectName } = props;

  const isSmallMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
      class="space-y-12"
    >
      {/* Heading */}
      <Heading heading={"About Me"} />

      <div class="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-10 pb-12 md:pb-0">
        {/* Background information */}
        <div class="flex flex-col space-y-4 w-full md:w-2/3 leading-7">
          <p class="text-gray-400">
            I am a student at{" "}
            <a
              href="https://www.falmouth.ac.uk"
              class="font-semibold text-primary hover:underline"
            >
              Falmouth University
            </a>{" "}
            from Devon, England studying for a BSc in Web Development. My main
            interests lie in front-end, full-stack, and user interface
            development and design. I have recently been focusing on creating
            React and Node.js applications hosted on the cloud, as well as
            marketing myself through my portfolio site and CV.
          </p>

          <p class="text-gray-400">
            I make use of the latest web development trends and technologies,
            and I am always looking for new ways to improve my skills. One of my
            standout achievements is creating an{" "}
            <span
              onClick={() => { ScrollTo({ target: "projects", offset: 120, mobileOffset: 80 })}}
              class="font-semibold text-primary hover:underline hover:cursor-pointer"
            >
              e-commerce site
            </span>{" "}
            as part of a mixed-method study into UX and UI design, and creating
            a{" "}
            <span
              onClick={() => {
                setSidebar(!sidebar);
                setProjectName("one-messaging");
              }}
              class="font-semibold text-primary hover:underline hover:cursor-pointer"
            >
              real-time messaging system
            </span>
            , both of which received high praise from my peers and instructors.
          </p>

          {/* Technologies list */}
          <p class="font-normal text-gray-400">
            Technologies I have been using recently:
          </p>

          <div class={`${
              isSmallMobile ? "grid-cols-1 gap-4" : "grid-cols-3 gap-10"
            } grid bg-tertiary px-5 pb-5`}
          >
            {technologies.map((column, index) => (
              <ul key={index}>
                {column.listColumn.map((technology, index) => (
                  <li key={index} class="flex flex-row mt-5 mb-1 space-x-2.5">
                    <div class="overflow-hidden inline-block mt-[0.175rem]">
                      <div class="h-2 w-2 bg-primary rotate-45 transform origin-top-left"></div>
                    </div>

                    <span class="text-sm font-normal text-gray-400">
                      {technology.label}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Developer picture */}
        <div class="min-w-[180px] sm:min-w-[305px] relative top-14 md:top-3 border-2 border-primary rounded">
          <motion.img
            initial={{ x: "5%", y: "5%" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            src="../images/portrait.webp"
            alt="developer portrait"
            class="w-full rounded relative bottom-3 right-3 hover:bottom-0 hover:right-0 transition-all duration-300 ease-in-out"
          ></motion.img>
        </div>
      </div>
    </motion.div>
  );
};