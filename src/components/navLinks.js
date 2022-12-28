import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "@mui/material/Button";

const links = [
  { id: 'homeLink', name: 'Home', path: '/' },
  { id: 'projectsLink', name: 'Projects', path: '/projects' },
  { id: 'contactLink', name: 'Contact', path: '/contact' },
];

export default function NavLinks(props) {

  const sidebar = props.sidebar;
  const setSidebar = props.setSidebar;

  const isMobile = window.innerWidth < 768;
  let containerVariants = {};
  let listVariants = {};

  // If not mobile, set animation variants
  if (!isMobile) {
    containerVariants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: 0.6,
          staggerChildren: 0.2,
        },
      },
    };

    listVariants = {
      hidden: { opacity: 0, y: '-80%' },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    };
  };
  
  return (
    <motion.ul
      variants={ containerVariants }
      initial="hidden"
      animate="visible"
      className={`${
        sidebar
          ? `h-screen w-[280px] sm:w-1/2 overflow-y-scroll flex mt-[3.75rem] sm:mt-[4.75rem] flex-col lg:flex-row absolute top-0 right-0 pt-28 pl-5 bg-tertiary shadow-[0px_6px_4px_0px_rgb(76,107,193)]`
          : `hidden`
      } md:flex flex-row items-center`}
    >
      {links.map((link) => (
        <motion.li
          variants={listVariants}
          id={link.id}
          className="mx-2.5 my-5 md:my-0 md:order-2"
        >
          <Link
            to={link.path}
            onClick={() => setSidebar(false)}
            className="text-lg font-semibold text-white hover:text-primary transition duration-300 ease-in-out"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}

      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="md:mr-3"
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
  );
};