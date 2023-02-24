import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";

export default function Header() {
  const navigate = useNavigate();
  const [src, setSrc] = useState('../images/logo.png');
  const [sidebar, setSidebar] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  //Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If user is scrolling down
      if (currentScrollY > lastScrollY) {
        setScrolled(true);
        // If user is scrolling up
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    // If sidebar is open, disable scroll
    if (sidebar) {
      window.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    };
    return () => window.removeEventListener("scroll", handleScroll);
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
        initial={{ y: '0%' }}
        animate={{ y: scrolled ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut'}}
        style={{ backgroundColor: sidebar ? '#1f2335': 'transparent'}}
        class={`w-full fixed top-0 py-1 sm:py-3 px-2.5 lg:px-10 flex justify-between items-center z-50 backdrop-blur transition-colors duration-200 ease-in-out`}
      >
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={src}
          alt="Logo"
          onMouseEnter={() => setSrc("../images/logo-hover.png")}
          onMouseLeave={() => setSrc("../images/logo.png")}
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
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