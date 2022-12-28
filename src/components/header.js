import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

import NavLinks from './navLinks';

export default function Header() {
  const navigate = useNavigate();
  const [src, setSrc] = useState('../images/logo.png');
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isMobile = window.innerWidth < 640;
  const isntDesktop = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down, set scrolled to true
      if (window.scrollY > 0) {
        setScrolled(true);
        // Else set scrolled to false
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        class={`${
          sidebar || scrolled ? `bg-tertiary` : `bg-none`
        } w-full fixed top-0 py-1 sm:py-3 px-2.5 sm:px-5 flex justify-between items-center z-50`}
      >
        {/* Logo */}
        <img
          src={src}
          onMouseEnter={() => setSrc('../images/logo-hover.png')}
          onMouseLeave={() => setSrc('../images/logo.png')}
          onClick={() => navigate('/')}
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
          <NavLinks
            sidebar={sidebar}
            setSidebar={setSidebar}
          />
        </div>
      </motion.nav>
    </>
  );
};