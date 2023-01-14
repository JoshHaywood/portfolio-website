import { motion } from "framer-motion";

import ScrollTo from "./utils/scrollTo";
import Button from "@mui/material/Button";

const links = [
  { id: 'skills', name: 'Skills' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

export default function NavLinks(props) {

  const sidebar = props.sidebar;
  const setSidebar = props.setSidebar;

  const isMobile = window.innerWidth < 768;
  let containerVariants = {};
  let listVariants = {};
  let sidebarVariants = {};

  // If sidebar is open disable scroll
  if (sidebar) {
    document.body.style.overflow = 'hidden';
    //Else enable scroll
  } else {
    document.body.style.overflow = 'unset';
  };

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
        y: '-80%' 
      },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    };
  } else {
    sidebarVariants = {
      open: { 
        opacity: 1, 
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
        opacity: 0, 
        x: "50%",
        position: "absolute", 
        top: 0, 
        right: 0,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    };
  };

  
  return (
    isMobile ? (
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={sidebar ? "open" : "closed"}
      >
        <ul
          class="h-screen w-[280px] flex mt-[3.75rem] sm:mt-[4.75rem] flex-col lg:flex-row pt-28 bg-tertiary shadow-[0px_6px_4px_0px_rgb(76,107,193)] items-center"
        >
          {links.map((link) => (
            <li class="mx-2.5 my-5 md:my-0 md:order-2">
              <div
                onClick={() => {
                  setSidebar(false);
                  ScrollTo({ target: link.id, offset: 120, mobileOffset: 20 });
                }}
                class="text-lg font-semibold text-white hover:text-primary transition duration-300 ease-in-out hover:cursor-pointer"
              >
                {link.name}
              </div>
            </li>
          ))}

          <div class="md:mr-3" >
            <Button
              href={`${process.env.PUBLIC_URL}/documents/cv.pdf`}
              target="_blank"
              sx={{
                textTransform: "none",
                border: "2px solid #4c6bc1",
                color: "white",
                bgcolor: "rgba(76, 107, 193, 0.3)",
                margin: sidebar ? "1.25rem 0" : "0",

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
      {links.map((link) => (
        <motion.li
          variants={listVariants}
          class="mx-2.5 my-5 md:my-0 md:order-2"
        >
          <div
            onClick={() => {
              setSidebar(false);
              ScrollTo({target: link.id, offset: 120, mobileOffset: 20});
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
        transition={{ duration: 1, ease: "easeInOut" }}
        class="md:mr-3"
      >
        <Button
          href={`${process.env.PUBLIC_URL}/documents/cv.pdf`}
          target="_blank"
          sx={{
            textTransform: "none",
            border: "2px solid #4c6bc1",
            color: "white",
            bgcolor: "rgba(76, 107, 193, 0.3)",
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
    )
  );
};