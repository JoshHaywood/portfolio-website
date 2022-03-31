import * as React from 'react';
import { Link } from 'react-router-dom';

const pagesColumn = [
  {name: "Home", path: "/"},
  {name: "Projects", path: "/projects"},
  {name: "Contact", path: "/contact"}
];

const projectsColumn = [
  {name: "Portfolio", path: "/portfolio-project"},
  {name: "Arduino", path: "/arduino-project"},
  {name: "Student Survival Store", path: "/student-survival-store-project"},
  {name: "One Messaging", path: "/one-messaging-project"},
  {name: "Esports Center", path: "/esports-center-project"},
  {name: "Game Review", path: "/game-review-project"}
];

export default function Footer() {
  return (
		<footer className="left-0 bottom-0 w-full bg-quaternary">
			<div className="flex flex-col md:flex-row justify-between m-auto py-4 px-1 w-4/6">
				{/* Pages column */}

        
          <div className="flex flex-col text-center md:text-left space-y-1"> 
            <h4 className="text-white font-medium">Pages</h4>
            {pagesColumn.map((item) => (
              <Link className="text-quaternary-text hover:text-white hover:underline" to={item.path}>{item.name}</Link>
            ))}
        </div>


				{/* Projects columns */}
				<div className="flex flex-col text-center md:text-left mt-1 md:mt-0 space-y-1"> 
					<h4 className="text-white font-medium">Projects</h4>
          {/* Maps first 3 entries */}
          {projectsColumn.map((item, index) => 
            index < 3 && (
              <Link className="text-quaternary-text hover:text-white hover:underline" to={item.path}>{item.name}</Link>
            )
          )}
				</div>

				<div className="flex flex-col md:justify-end text-center md:text-left space-y-1"> 
        {/* Maps final 3 entries */}
        {projectsColumn.map((item, index) => 
            index >= 3 && (
              <Link className="text-quaternary-text hover:text-white hover:underline" to={item.path}>{item.name}</Link>
            )
          )}
				</div>
			</div>

			{/* Footnote */}
			<div className="flex py-2 w-4/6 m-auto justify-between border-t-2 border-primary">
        		<a className="text-white hover:text-primary" href="https://www.joshhaywood-portfolio.com/">© Josh Haywood {new Date().getFullYear()}</a>
				<button className="text-white hover:text-primary" onClick={() => {document.documentElement.scrollTop = 0}}>Back to top ↑</button>
			</div>
    </footer>
  );
};