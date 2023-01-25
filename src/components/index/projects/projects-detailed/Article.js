import { motion } from "framer-motion";

import Button from "@mui/material/Button";

export default function Article(props) {
  const features = props.features;
  const structure = props.structure;

  return (
    <motion.div
      class="w-full md:w-4/5 mr-5 order-2 md:order-1 space-y-10"
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: props.articleDelay,
        ease: "easeInOut",
      }}
    >
      <p>{props.overview}</p>

      {/* Features list */}
      <div class="py-10 md:flex space-y-10 items md:space-y-0 md:space-x-10 border-y-2 border-primary">
        <div class="space-y-8 w-3/4 md:w-full mx-auto md:mx-0">
          <h2 class="font-medium text-2xl text-center md:text-left">
            Features
          </h2>
          <ul class="space-y-8">
            {features.map((features) => (
              <li class="list-disc marker:text-primary ml-4 text-lg font-normal">
                {features}
              </li>
            ))}
          </ul>
        </div>

        <div class="space-y-8 w-3/4 md:w-full mx-auto md:mx-0">
          <h3 class="font-medium text-2xl text-center md:text-left">
            Structure
          </h3>
          <ul class="space-y-8">
            {structure.map((structure) => (
              <li class="list-disc marker:text-primary ml-4 text-lg font-normal">
                {structure}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="space-y-3">
        <h4 class="font-semibold text-3xl text-center md:text-left">Target</h4>
        <p>{props.target}</p>
      </div>

      <img
        src={props.targetImage}
        class="mx-auto rounded"
        alt="Project target"
      ></img>

      <div class="space-y-3">
        <h5 class="font-semibold text-3xl text-center md:text-left">Issues</h5>
        <p>{props.issues}</p>
      </div>

      <img
        class="mx-auto rounded"
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
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        sx={{
          border: "2px solid #4c6bc1",
          color: "white",
          paddingRight: "1.9rem",
          textTransform: "none",
          width: "100%",

          ":hover": {
            bgcolor: "rgba(76, 107, 193, 0.3)",
          },
        }}
      >
        Back to top
      </Button>
    </motion.div>
  );
};