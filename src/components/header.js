import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

import NavLinks from "./NavLinks";

export default function Header() {
  const navigate = useNavigate();
  const [src, setSrc] = useState('../Images/logo.png');
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isMobile = window.innerWidth < 640;
  const isntDesktop = window.innerWidth < 768;

  useEffect(() => {
    //Scroll handler
    const handleScroll = () => {
        const currentScrollY = window.scrollY; //Current scroll position
        //If user scrolls down
        if (currentScrollY > lastScrollY) {
            setScrolled(true);
          //Else user scrolls up
        } else {
            setScrolled(false);
        }
        setLastScrollY(currentScrollY); //Set last scroll position to current
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

  return (
    <>
      {/* Overlay */}
      <div
        class={`${
          sidebar
            ? `z-50 h-screen w-screen fixed bg-black opacity-60 backdrop-blur`
            : `hidden`
        }`}
      ></div>

      <motion.nav
        initial={{ y: '0%' }}
        animate={{ y: scrolled ? '-100%' : '0%' }}
        transition={{ duration: 0.3 }}
        class="w-full fixed top-0 py-1 sm:py-3 px-2.5 lg:px-10 flex justify-between items-center z-50 bg-transparent backdrop-blur"
      >
        {/* Logo */}
        <img
          src={src}
          onMouseEnter={() => setSrc("../Images/logo-hover.png")}
          onMouseLeave={() => setSrc("../Images/logo.png")}
          onClick={() => navigate("/")}
          alt="Logo"
          class="w-[200px] sm:w-[250px] h-auto px-2 pr-0 sm:pr-2 backdrop-blur hover:cursor-pointer"
        ></img>

        <div class="flex items-center mb-1">
          {/* Hamburger menu */}
          {isntDesktop && (
            <Hamburger
              color="#ffffff"
              size={`${isMobile ? 25 : 30}`}
              easing="ease-in-out"
              rounded
              toggle={setSidebar}
              toggled={sidebar}
            />
          )}

          {/* Navlinks */}
          <NavLinks sidebar={sidebar} setSidebar={setSidebar} />
        </div>
      </motion.nav>
    </>
  );
};