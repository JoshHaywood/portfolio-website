import * as React from 'react';
import { Link } from 'react-router-dom';

const pagesColumn = [
  {name: "Home", path: "/"},
  {name: "Projects", path: "/projects"},
  {name: "Contact", path: "/contact"}
];

const projectsColumn = [
  {name: "Portfolio", path: "/projects/portfolio"},
  {name: "Arduino", path: "/projects/arduino"},
  {name: "Student Survival Store", path: "/projects/student-survival-store"},
  {name: "One Messaging", path: "/projects/one-messaging"},
  {name: "Esports Center", path: "/projects/esports-center"},
  {name: "Game Review", path: "/projects/game-review"}
];

export default function Footer() {
  return (
		<footer className="bg-tertiary">
      <div className="px-16 max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between py-4">
          {/* Pages column */}
          <div className="flex flex-col text-center md:text-left space-y-1"> 
              <h5 className="text-white font-medium">Pages</h5>
              {pagesColumn.map((item) => (
                <Link className="hover:underline" to={item.path}>{item.name}</Link>
              ))}
          </div>


          {/* Projects columns */}
          <div className="flex flex-col text-center md:text-left mt-1 md:mt-0 space-y-1"> 
            <h5 className="text-white font-medium">Projects</h5>
            {/* Maps first 3 entries */}
            {projectsColumn.map((item, index) => 
              index < 3 && (
                <Link className="hover:underline" to={item.path}>{item.name}</Link>
              )
            )}
          </div>

          <div className="flex flex-col md:justify-end text-center md:text-left space-y-1"> 
          {/* Maps final 3 entries */}
          {projectsColumn.map((item, index) => 
              index >= 3 && (
                <Link className="hover:underline" to={item.path}>{item.name}</Link>
              )
            )}
          </div>
        </div>

        {/* Footnote */}
        <div className="flex py-2 justify-between border-t-2 border-primary">
          <a className="text-white hover:text-primary" href="https://www.joshhaywood-portfolio.com/">© Josh Haywood {new Date().getFullYear()}</a>

          <div id="backToTop" className="flex flex-row space-x-1 items-center"> {/* Container used in place of span as CSS doesnt effect span correctly */}
            <button className="text-white" onClick={() => {document.documentElement.scrollTop = 0}}>Back to top</button>
            <p className="text-white">↑</p>
          </div>
        </div>
      </div>
    </footer>
  )
};