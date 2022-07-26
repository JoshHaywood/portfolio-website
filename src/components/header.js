import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

export default function Header() {
  const links = [
    {id: "homeLink", name: "Home", path: "/"},
    {id: "projectsLink", name: "Projects", path: "/projects"},
    {id: "contactLink", name: "Contact", path: "/contact"}
  ];

  //Hamburger state
  const [isOpen, setOpen] = useState(false);
  //Scroll state
  const [scrolled, setScroll] = useState(false)

  // The scroll listener
  const handleScroll = event => {
    if (window.scrollY >= 1) {
      setScroll(true)
    }

    else {
      setScroll(false)
    };
  };

  window.addEventListener("scroll", handleScroll);

  //Animation
  const isMobile = window.innerWidth < 1024; 
  let containerVariants = {};
  let listVariants = {};

  //Prevents animations on mobile
  if (!isMobile) {
    //Animation Variants
    containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
        }
      }
    };
    
    listVariants = {
      hidden: { opacity: 0, y: '-80%' },
      visible: { 
        opacity: 1,
        y: 0,

        transition: {
          duration: 0.5,
          ease: 'easeInOut'
        } 
      }
    };
  };

  return (
    <nav
      className={`${
        isOpen || scrolled
        ? `bg-tertiary`
        : `bg-none`
      } w-full h-[75px] fixed top-0 pt-1 sm:px-6 flex justify-between items-center z-50`}
    
    >
      {/* Logo */}
      <Link to="/" className="px-2 pb-1.5">
        <div className="bg-[url('../public/Images/logo.png')] w-[260px] h-[50px] hover:bg-[url('../public/Images/logo-hover.png')] bg-[length:260px] bg-no-repeat" alt="logo"></div>
      </Link>

      <div className="flex"> {/* Container for links and menu */}
        {/* Hamburger */}
        <div className="md:hidden mb-0.5  z-10"> {/* Had to use parent element as Tailwind doesn't effect custom React components */}
          <Hamburger
            color="#ffffff"
            easing="ease-in-out"
            rounded
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        
        {/* Links */}
        {/* Overlay */}
        <div 
          className={`${
            isOpen
              ? `h-screen w-screen absolute mt-[3.75rem] left-0 bg-black opacity-60 backdrop-blur`
              : `hidden`
          }`}
        ></div>

        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${
            isOpen
              ?  `h-screen w-3/5 sm:w-1/2  flex flex-col lg:flex-row items-center absolute top-0 right-0 pt-40 bg-tertiary shadow-md shadow-primary`
              : `hidden`
          } md:flex flex-row`}
        >
          {links.map((link) => (
            <motion.li variants={listVariants} id={link.id} className="m-5 lg:my-0 lg:mx-5 leading-10">
              <Link 
                className="text-2xl font-medium text-white hover:text-primary transition duration-300 ease-in-out"
                to={link.path} 
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};