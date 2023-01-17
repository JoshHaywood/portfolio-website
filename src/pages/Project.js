import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { GithubLink, DeployLink } from "../components/index/projects/SocialLinks";
import Button from "@mui/material/Button";

export default function Project(props) {
  const navigate = useNavigate();

  const features = props.features;
  const structure = props.structure;

  return (
    <>
      <div class="relative flex flex-col justify-center mt-[70px]">
        {/* Background Image */}
        <div class="overflow-hidden w-[screen]">
          {/* Container to prevent overflow */}
          <motion.div
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
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
            duration: 0.5,
            delay: props.headingDelay,
            ease: "easeInOut",
          }}
        >
          <div class="space-y-3 text-center inline-block p-5 pb-8 rounded-md bg-secondary">
            <h1 class="inline-block mx-auto shadow-md sm:text-5xl md:text-6xl font-semibold">
              {props.heading}
            </h1>
            <div class="h-1 w-4/5 mx-auto bg-primary"></div>
          </div>
        </motion.div>
      </div>

      <div class="flex flex-col md:flex-row max-w-[1000px] mx-auto py-16 md:py-32 px-5">
        {/* Article */}
        <motion.div
          class="w-full md:w-4/5 mr-5 order-2 md:order-1 space-y-10"
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: props.articleDelay,
            ease: "easeInOut",
          }}
        >
          <p>{props.overview}</p>

          {/* Features list */}
          <div class="py-10 md:flex space-y-10 items md:space-y-0 md:space-x-10 border-y-2 border-primary">
            <div class="space-y-10 w-3/4 md:w-full mx-auto md:mx-0">
              <h2 class="font-medium text-3xl text-center md:text-left">
                Features
              </h2>
              <ul class="space-y-10">
                {features.map((features) => (
                  <li class="list-disc marker:text-primary ml-4 text-2xl align-right ">
                    {features}
                  </li>
                ))}
              </ul>
            </div>

            <div class="space-y-10 w-3/4 md:w-full mx-auto md:mx-0">
              <h3 class="font-medium text-3xl text-center md:text-left">
                Structure
              </h3>
              <ul class="space-y-10">
                {structure.map((structure) => (
                  <li class="list-disc marker:text-primary ml-4 text-2xl">
                    {structure}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="font-semibold text-3xl text-center md:text-left">
              Target
            </h4>
            <p>{props.target}</p>
          </div>

          <img
            class="mx-auto rounded-sm"
            src={props.targetImage}
            alt="Project target"
          ></img>

          <div class="space-y-3">
            <h5 class="font-semibold text-3xl text-center md:text-left">
              Issues
            </h5>
            <p>{props.issues}</p>
          </div>

          <img
            class="mx-auto rounded-sm"
            src={props.issuesImage}
            alt="Project issue"
          ></img>

          <div class="space-y-3">
            <h6 class="font-semibold text-3xl text-center md:text-left">
              Resolutions
            </h6>
            <p>{props.resolutions}</p>
          </div>

          <Button
            onClick={() => {document.documentElement.scrollTop = 0}}
            sx={{
              border: "2px solid #4c6bc1",
              color: "white",
              paddingRight: "1.9rem",
              width: "100%",

              ":hover": {
                bgcolor: "rgba(76, 107, 193, 0.3)",
              },
            }}
          >
            Back to top
          </Button>
        </motion.div>

        {/* Side menu */}
        <motion.div
          class="w-full md:w-1/5 mx-auto pb-10 md:py-0 relative order-1 md:order-2 md:text-center"
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: props.sideMenuDelay,
            ease: "easeInOut",
          }}
        >
          <Button
            onClick={() => {
              navigate(-1);
              document.documentElement.scrollTop = 0;
            }}
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#4c6bc1",
              position: { md: "absolute" },
              left: "0",
              right: "0",
              margin: { md: "0 1.25rem" },

              ":hover": {
                bgcolor: "rgba(76, 107, 193, 0.75)",
              },
            }}
          >
            Go Back
          </Button>

          <div class="absolute top-0 md:top-[6rem] bottom-0 flex flex-row md:flex-col md:left-0 right-0 items-center space-x-3 md:space-x-0 md:space-y-10 pb-10 md:pb-0">
            <GithubLink link={props.repoLink} width="2rem" height="2rem" />
            <DeployLink link={props.deployLink} width="2rem" height="2rem" />
          </div>

          <div class="invisible md:visible w-1 h-full mx-auto bg-quaternary"></div>
        </motion.div>
      </div>
    </>
  );
};