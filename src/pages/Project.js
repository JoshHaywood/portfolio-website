import { motion } from "framer-motion";

import Sidebar from "../components/index/projects/projects-detailed/Sidebar";
import Article from "../components/index/projects/projects-detailed/Article";

export default function Project(props) {
  return (
    <>
      <div class="relative flex flex-col justify-center mt-[70px]">
        {/* Background Image */}
        <div class="overflow-hidden w-[screen]">
          {/* Container to prevent overflow */}
          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: props.backgroundDelay,
              ease: "easeInOut",
            }}
            class="relative overflow-hidden"
          >
            <div class="absolute w-full h-full z-10 md:h-[40vh] md:w-screen brightness-50 opacity-50 bg-primary"></div>
            <img
              src={props.projectImage}
              alt="project background"
              class="max-w-[640px] sm:max-w-[760px] md:hidden"
            ></img>

            {/* Replace img with background image to cover screen whilst maintaining aspect ratio */}
            <div
              class="hidden md:flex md:h-[40vh]"
              style={{ backgroundImage: `url("${props.projectImage}")` }}
            ></div>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div
          class="absolute text-center left-0 right-0 inline-block px-5 z-10"
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: props.headingDelay,
            ease: "easeInOut",
          }}
        >
          <div class="space-y-3 text-center inline-block p-5 pb-8 rounded-md bg-secondary">
            <h1 class="inline-block mx-auto shadow-md sm:text-5xl md:text-6xl font-semibold tracking-wide">
              {props.heading}
            </h1>
            <div class="h-1 w-4/5 mx-auto bg-primary"></div>
          </div>
        </motion.div>
      </div>

      <div class="flex flex-col md:flex-row max-w-[1000px] mx-auto py-16 md:py-32 px-5">
        {/* Article */}
        <Article 
          articleDelay={props.articleDelay}
          overview={props.overview}
          features={props.features}
          structure={props.structure}
          target={props.target}
          targetImage={props.targetImage}
          issues={props.issues}
          issuesImage={props.issuesImage}
          resolutions={props.resolutions}
        />

        {/* Side menu */}
        <Sidebar 
          sideMenuDelay={props.sideMenuDelay}
          repoLink={props.repoLink}
          deployLink={props.deployLink}
        />
      </div>
    </>
  );
};