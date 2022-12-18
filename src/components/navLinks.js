import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '@mui/material/Button';

export default function NavLinks(props) {
  const links = [
    { id: 'homeLink', name: 'Home', path: '/' },
    { id: 'projectsLink', name: 'Projects', path: '/projects' },
    { id: 'contactLink', name: 'Contact', path: '/contact' },
  ];

  const sidebar = props.sidebar;
  const setSidebar = props.setSidebar;

  const isMobile = window.innerWidth < 768;
  var containerVariants = {};
  var listVariants = {};

  // If not mobile, set animation variants
  if (!isMobile) {
    //Animation Variants
    containerVariants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: 3.4,
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${
        sidebar
          ? `h-screen w-3/5 sm:w-1/2 overflow-y-scroll flex flex-col lg:flex-row absolute top-0 right-0 pt-40 pl-5 bg-tertiary shadow-md shadow-primary`
          : `hidden`
      } md:flex flex-row items-center`}
    >
      {links.map((link) => (
        <motion.li
          variants={listVariants}
          id={link.id}
          className="mx-3 my-5 md:my-0 md:order-2"
        >
          <Link
            to={link.path}
            onClick={() => setSidebar(false)}
            className="text-2xl font-medium text-white hover:text-primary transition duration-300 ease-in-out"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}

      <motion.div
        initial={{opacity: 0, y: "-80%"}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 1,
          delay: 2.9,
          ease: "easeInOut",
        }}
        className="md:mr-3"
      >
        <Button
          href={`${process.env.PUBLIC_URL}/documents/cv.pdf`}
          target="_blank"
          sx={{
            border: "2px solid #4c6bc1",
            color: "white",
            bgcolor: "rgba(76, 107, 193, 0.3)",
            margin: "1.25rem 0",

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