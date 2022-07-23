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
      navBar.style.boxShadow = 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
    }

    //Else they haven't scrolled
    else { 
        navBar.style.background = 'none'; 
        navBar.style.boxShadow = 'none'
    };
  });

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
    <nav id="navbar" className="w-full h-[75px] fixed py-2 px-3 sm:px-6 flex justify-between items-center z-50 transition-all duration-300 ease-in-out">
      {/* Logo */}
      <Link to="/">
        <div className="bg-[url('../public/Images/logo.png')] hover:bg-[url('../public/Images/logo-hover.png')] w-[260px] h-[60px]"></div>
      </Link>

      <div className="flex"> {/* Container for links and menu */}
        {/* Hamburger */}
        <div className="lg:hidden mb-0.5 z-10" onClick={(ToggleNavLinks)}> {/* Had to use parent element as Tailwind doesn't effect custom React components */}
          <Hamburger
            color="#ffffff"
            easing="ease-in-out"
            rounded
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        {/* If menu is open */}
        {isOpen && (
          <>
            <div className="h-screen w-screen absolute mt-[3.75rem] left-0 bg-black opacity-60 blur-sm"></div>
            
            <ul className="h-screen w-3/5 sm:w-1/2 md:w-2/5 bg-quaternary flex flex-col lg:flex-row items-center absolute top-0 right-0 pt-32">
              {links.map((link) => (
                <li className="m-5 lg:my-0 lg:mx-5 leading-10">
                  <Link 
                    className="text-2xl font-medium text-white hover:text-primary transition duration-300 ease-in-out"
                    to={link.path} 
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Links */}
        <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="hidden lg:flex flex-row">
            {links.map((link, i) => (
              <motion.li variants={listVariants} id={link.id} className="m-5 lg:my-0 lg:mx-5">
                <Link className="text-2xl font-medium text-white hover:text-primary transition duration-300 ease-in-out" to={link.path}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </nav>
  );
}