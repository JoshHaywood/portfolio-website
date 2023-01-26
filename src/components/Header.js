import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ResizeHandler from "./utils/resizeHandler";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";

export default function Header() {
  const navigate = useNavigate();
  const [src, setSrc] = useState('../images/logo.png');
  const [sidebar, setSidebar] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [backdropFilter, setBackdropFilter] = useState('blur(0)');
  const [boxShadow, setBoxShadow] = useState('drop-shadow(0 0 #0000)');

  const isMobile = ResizeHandler(640);

  useEffect(() => {
    //Scroll handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY; //Current scroll position
      //If user scrolls down
      if (currentScrollY > lastScrollY) {
        setScrolled(true);

        //If user is not at the top of the page
        if (currentScrollY > 0) {
          setBackdropFilter('blur(8px)');
          setBoxShadow('drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))');
        };
        //Else user scrolls up
      } else {
        setScrolled(false);

        //If at user is at the top of the page
        if (currentScrollY === 0) {
          setBackdropFilter('blur(0)');
          setBoxShadow('drop-shadow(0 0 #0000)');
        };
      };
      setLastScrollY(currentScrollY); //Set last scroll position to current
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  

  useEffect(() => {
    //If user is at the top of the page
    if (window.scrollY === 0) {
      setScrolled(false);
    }
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setSidebar(false)}
        class={`${
          sidebar
            ? `z-50 h-screen w-screen fixed bg-black opacity-70 backdrop-blur`
            : `hidden`
        }`}
      ></div>

      <motion.nav
        initial={{ y: '0%', backdropFilter: backdropFilter, filter: boxShadow }}
        animate={{ y: scrolled ? '-100%' : '0%', backdropFilter: backdropFilter, filter: boxShadow }}
        transition={{ duration: 0.3, ease: 'easeInOut'}}
        style={{ backgroundColor: sidebar ? '#15171a': 'transparent'}}
        class={`w-full fixed top-0 py-1 sm:py-3 px-2.5 lg:px-10 flex justify-between items-center z-50 transition-colors duration-200 ease-in-out`}
      >
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={src}
          onMouseEnter={() => setSrc("../images/logo-hover.png")}
          onMouseLeave={() => setSrc("../images/logo.png")}
          onClick={() => navigate("/")}
          alt="Logo"
          class="w-[200px] sm:w-[250px] h-auto px-2 pr-0 sm:pr-2 backdrop-blur hover:cursor-pointer"
        ></motion.img>

        <div class="flex items-center mb-1">
          {/* Hamburger menu */}
          <div class="block md:hidden z-50">
            <Hamburger
              color="#ffffff"
              size={`${isMobile ? 25 : 30}`}
              easing="ease-in-out"
              rounded
              toggle={setSidebar}
              toggled={sidebar}
            />
          </div>

          {/* Navlinks */}
          <NavLinks sidebar={sidebar} setSidebar={setSidebar} />
        </div>
      </motion.nav>
    </>
  );
};