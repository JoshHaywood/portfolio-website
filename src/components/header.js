import * as React from 'react';
import { gsap } from "gsap";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

gsap.config({
  // default is "resize,visibilitychange,DOMContentLoaded,load" so we can remove "resize" from the list:
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

const links = [
  {id: "homeLink", name: "Home", path: "/"},
  {id: "projectsLink", name: "Projects", path: "/projects"},
  {id: "contactLink", name: "Contact", path: "/contact"}
];

export default function Header() {
  //Animation
  useEffect(() => {
    gsap.from('#homeLink', {duration: 1, y: '-100%', opacity: '0', ease: 'power4', delay: '0.3'});
    gsap.from('#projectsLink', {duration: 1, y: '-100%', opacity: '0', ease: 'power4', delay: '0.5'});
    gsap.from('#contactLink', {duration: 1, y: '-100%', opacity: '0', ease: 'power4', delay: '0.7'});
});

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
    }   
  });

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
        <ul className= "hidden lg:flex flex-row">
          {links.map((link) => (
            <li id={link.id} className="m-5 lg:my-0 lg:mx-5">
              <Link className="text-2xl font-medium text-white hover:text-primary transition duration-300 ease-in-out" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}