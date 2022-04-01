import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const links = [
  {name: "Home", path: "/"},
  {name: "Projects", path: "/projects"},
  {name: "Contact", path: "/contact"}
];

export default function Header() {
  //State to toggle navlinks
  const [isOpen, setOpen] = useState(false);

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
    <nav 
      id="navbar" 
      className="w-full fixed py-2 px-3 flex justify-between items-center z-10 transition duration-300 ease-in-out">
      {/* Logo */}
      <Link to="/">
        <div className="bg-[url('../public/images/logo.png')] hover:bg-[url('../public/images/logo-hover.png')] w-[260px] h-[60px]"></div>
      </Link>

      <div className="flex"> {/* Container for links and menu */}
        {/* Hamburger */}
        <div className="lg:hidden"> {/* Had to use parent element as Tailwind doesn't effect custom React components */}
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
          <ul className="h-56 bg-quaternary lg:h-auto flex flex-col lg:flex-row absolute lg:relative mt-10 lg:mt-0 right-0 lg:right-auto px-10 lg:px-0 rounded-lg lg:rounded-none shadow-sm lg:shadow-none">
            {links.map((link) => (
              <li className="m-5 lg:my-0 lg:mx-5">
                <Link className="text-2xl font-medium text-white hover:text-primary transition duration-300 ease-in-out" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        <ul className= "h-56 bg-quaternary lg:h-auto hidden lg:flex flex-col lg:flex-row absolute lg:relative mt-10 lg:mt-0 right-0 lg:right-auto px-10 lg:px-0 rounded-lg lg:rounded-none shadow-sm lg:shadow-none">
          {links.map((link) => (
            <li className="m-5 lg:my-0 lg:mx-5">
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