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

  //Set navbar background without scroll
  function ToggleNavLinks() { 
    var navBar = document.getElementById('navbar'); 
    navBar.style.background = '#181a1d'; 
  };

  //Scroll event
  window.addEventListener('scroll', function() {; 
    var navBar = document.getElementById('navbar'); 

    //If user scrolls 1 or more pixels
    if(window.scrollY >= 1){ 
      navBar.style.background = '#181a1d'; 
    }

    //Else they haven't scrolled
    else { 
        navBar.style.background = 'none'; 
        navBar.style.boxShadow = 'none'
    };
  });

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
    <nav id="navbar" className="w-full h-[75px] fixed py-2 px-1.5 sm:px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <Link to="/">
        <div className="bg-[url('../public/Images/logo.png')] w-[260px] h-[50px] hover:bg-[url('../public/Images/logo-hover.png')] bg-[length:260px] bg-no-repeat"></div>
      </Link>

      <div className="flex"> {/* Container for links and menu */}
        {/* Hamburger */}
        <div className="lg:hidden mb-0.5 z-10" onClick={ToggleNavLinks}> {/* Had to use parent element as Tailwind doesn't effect custom React components */}
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
              ?  `h-screen min-w-[390px] flex flex-col lg:flex-row items-center absolute top-0 right-0 pt-40 bg-quaternary shadow-md shadow-primary`
              : `hidden`
          } lg:flex flex-row`}
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