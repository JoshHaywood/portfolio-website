import { motion } from "framer-motion";

import Button from "@mui/material/Button";

export default function Article(props) {
  const features = props.features;
  const structure = props.structure;

  const featuresList = [
    {
      heading: "Features",
      list: features,
    },
    {
      heading: "Structure",
      list: structure,
    },
  ];

  const section = [
    {
      heading: "Target",
      text: props.target,
      image: props.targetImage,
      alt: "Project target",
    },
    {
      heading: "Issues",
      text: props.issues,
      image: props.issuesImage,
      alt: "Project issues",
    },
    {
      heading: "Resolutions",
      text: props.resolutions,
    },
  ];

  return (
    <motion.div
      class="w-full md:w-4/5 order-2 md:order-1 space-y-10"
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
        {featuresList.map((list, index) => (
          <div key={index} class="space-y-8 w-3/4 md:w-full mx-auto md:mx-0">
            {index === 0 ? (
              <h2 class="font-semibold text-2xl text-center md:text-left">
                {list.heading}
              </h2>
            ) : (
              <h3 class="font-medium text-2xl text-center md:text-left">
                {list.heading}
              </h3>
            )}
            <ul class="space-y-8">
              {list.list.map((item) => (
                <li class="list-disc marker:text-primary ml-4 text-lg font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sections */}
      {section.map((item, index) => (
        <>
          <div key={index} class="space-y-3">
            {index === 0 && (
              <h4 class="font-medium text-2xl">
                {item.heading}
              </h4>
            )}
            {index === 1 && (
              <h5 class="font-medium text-2xl">
                {item.heading}
              </h5>
            )}
            {index === 2 && (
              <h6 class="font-medium text-2xl">
                {item.heading}
              </h6>
            )}

            <p>{item.text}</p>
          </div>

          {index !== 2 && (
            <img
              src={item.image}
              class="mx-auto rounded"
              alt={item.alt}
            ></img>
          )}
        </>
      ))}

      <Button
        onClick={() => {document.documentElement.scrollTop = 0}}
        sx={{
          border: "2px solid #4c6bc1",
          color: "white",
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