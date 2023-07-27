import { motion } from "framer-motion";

import technologies from "../../data/technologies";

import Heading from "./Heading";
import { ScrollTo } from "../utils/scrollHandler";

export default function About(props) {
  const { sidebar, setSidebar, setProjectName } = props;

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Heading */}
      <Heading heading={"About Me"} />

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-10 pb-12 md:pb-0">
        {/* Background information */}
        <div className="flex flex-col space-y-4 w-full md:w-2/3 leading-7">
          <p className="text-gray-400">
            I am a recent graduate from{" "}
            <a
              href="https://www.falmouth.ac.uk"
              className="font-semibold text-primary hover:underline"
            >
              Falmouth University
            </a>{" "}
            with a BSc in Web Development. Located in Devon, England, my main
            interests lie in front-end, full-stack, and user interface
            development and design. Recently, I have been focusing on creating
            full-stack RESTful APIs with React, Node.js, and TypeScript hosted
            on the cloud. Additionally, I have been actively marketing myself
            through my portfolio site and CV."
          </p>

          <p className="text-gray-400">
            I make use of the latest web development trends and technologies,
            and I am always looking for new ways to improve my skills. One of my
            standout achievements is creating an{" "}
            <span
              onClick={() => {
                ScrollTo({ target: "projects", offset: 120, mobileOffset: 80 });
              }}
              className="font-semibold text-primary hover:underline hover:cursor-pointer"
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
              className="font-semibold text-primary hover:underline hover:cursor-pointer"
            >
              real-time messaging system
            </span>
            , both of which received high praise from my peers and instructors.
          </p>

          {/* Technologies list */}
          <p className="font-normal text-gray-400">
            Technologies I have been using recently:
          </p>

          <div className="max-[500px]:grid-cols-1 max-[500px]:gap-4 grid-cols-3 gap-10 grid bg-tertiary px-5 pb-5">
            {technologies.map((column, index) => (
              <ul key={index}>
                {column.listColumn.map((technology) => (
                  <li
                    key={technology.label}
                    className="flex flex-row mt-5 mb-1 space-x-2.5"
                  >
                    <div className="overflow-hidden inline-block mt-[0.175rem]">
                      <div className="h-2 w-2 bg-primary rotate-45 transform origin-top-left"></div>
                    </div>

                    <span className="text-sm font-normal text-gray-400">
                      {technology.label}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Developer picture */}
        <div className="min-w-[180px] sm:min-w-[305px] relative top-14 md:top-3 border-2 border-primary rounded">
          <motion.img
            initial={{ x: "5%", y: "5%" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            src="../images/portrait.webp"
            alt="developer portrait"
            className="w-full rounded relative bottom-3 right-3 hover:bottom-0 hover:right-0 transition-all duration-300 ease-in-out"
          ></motion.img>
        </div>
      </div>
    </motion.div>
  );
}
