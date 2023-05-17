import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { ScrollTo } from "./utils/scrollHandler";
import Button from "@mui/material/Button";

const links = [
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

export default function NavLinks(props) {
  const navigate = useNavigate();

  const sidebar = props.sidebar;
  const setSidebar = props.setSidebar;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let { containerVariants, listVariants, sidebarVariants } = {};

  // If sidebar is open disable scroll
  if (sidebar) {
    document.body.style.overflow = "hidden";
    //Else enable scroll
  } else {
    document.body.style.overflow = "unset";
  }

  // If not mobile, set animation variants. Else use sidebar variants
  if (!isMobile) {
    containerVariants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: 0.7,
          staggerChildren: 0.2,
        },
      },
    };

    listVariants = {
      hidden: {
        opacity: 0,
        y: "-80%",
      },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    };
  } else {
    sidebarVariants = {
      open: {
        x: 0,
        position: "absolute",
        top: 0,
        right: 0,

        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },

      closed: {
        x: "105%",
        position: "absolute",
        top: 0,
        right: 0,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    };
  }

  return isMobile ? (
    <motion.div
      variants={sidebarVariants}
      initial="closed"
      animate={sidebar ? "open" : "closed"}
    >
      <ul class="h-screen w-[280px] flex mt-[3.75rem] sm:mt-[4.75rem] flex-col lg:flex-row items-center pt-28 bg-tertiary">
        <Link to="/">
          {links.map((link, index) => (
            <li key={index} class="md:order-2">
              <div
                onClick={() => {
                  setSidebar(false);
                  ScrollTo({ target: link.id, offset: 120, mobileOffset: 80 });
                }}
                class="text-lg mr-2.5 font-semibold my-10 text-white hover:text-primary transition duration-300 ease-in-out hover:cursor-pointer"
              >
                {link.name}
              </div>
            </li>
          ))}
        </Link>

        <div class="md:mr-3">
          <Button
            href={`${process.env.PUBLIC_URL}/documents/josh-haywood-cv.pdf`}
            target="_blank"
            sx={{
              textTransform: "none",
              border: "2px solid #f2584c",
              color: "white",
              bgcolor: "rgba(242, 88, 76, 0.3)",

              ":hover": {
                bgcolor: "none",
              },
            }}
          >
            View my CV
          </Button>
        </div>
      </ul>
    </motion.div>
  ) : (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      class={`${
        sidebar
          ? `h-screen w-[280px] sm:w-1/2 overflow-y-scroll flex mt-[3.75rem] sm:mt-[4.75rem] flex-col lg:flex-row pt-28 pl-5 bg-tertiary shadow-[0px_6px_4px_0px_rgb(76,107,193)]`
          : `hidden`
      } md:flex flex-row items-center`}
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          variants={listVariants}
          class="mx-2.5 md:order-2"
        >
          <div
            onClick={() => {
              setSidebar(false);
              navigate("/");
              ScrollTo({ target: link.id, offset: 120, mobileOffset: 80 });
            }}
            class="text-lg font-semibold text-white hover:text-primary transition duration-300 ease-in-out hover:cursor-pointer"
          >
            {link.name}
          </div>
        </motion.li>
      ))}

      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        class="md:mr-3"
      >
        <Button
          href={`${process.env.PUBLIC_URL}/documents/josh-haywood-cv.pdf`}
          target="_blank"
          sx={{
            textTransform: "none",
            border: "2px solid #f2584c",
            color: "white",
            bgcolor: "rgba(242, 88, 76, 0.3)",
            margin: sidebar ? "1.25rem 0" : "0",

            ":hover": {
              bgcolor: "none",
            },
          }}
        >
          View my CV
        </Button>
      </motion.div>
    </motion.ul>
  );
}
