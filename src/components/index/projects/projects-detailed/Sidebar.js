import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { GithubLink, DeployLink } from "../SocialLinks";
import Button from "@mui/material/Button";

export default function Sidebar(props) {
  const navigate = useNavigate();

  return (
    <motion.div
      class="w-full md:w-1/5 mx-auto pb-10 md:py-0 relative order-1 md:order-2 md:text-center"
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
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
          textTransform: "none",
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
  );
};