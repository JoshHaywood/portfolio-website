import React from 'react';
import { Link } from 'react-router-dom';

const pagesColumn = [
  {name: 'Home', path: '/'},
  {name: 'Projects', path: '/projects'},
  {name: 'Contact', path: '/contact'}
];

const projectsColumn = [
  {name: 'Portfolio', path: '/projects/portfolio'},
  {name: 'Arduino', path: '/projects/arduino'},
  {name: 'Student Survival Store', path: '/projects/student-survival-store'},
  {name: 'One Messaging', path: '/projects/one-messaging'},
  {name: 'Esports Center', path: '/projects/esports-center'},
  {name: 'Game Review', path: '/projects/game-review'}
];

export default function Footer() {
  return (
		<footer class="bg-tertiary">
      <div class="px-16 max-w-[1000px] mx-auto">
        <div class="items-center md:items-end flex flex-col md:flex-row md:justify-between pt-5 pb-4">
          {/* Pages column */}
          <div class="flex flex-col text-center md:text-left space-y-1"> 
              <h4 class="text-xl font-medium">Pages</h4>
              {pagesColumn.map((item) => (
                <Link class="hover:underline" to={item.path}>{item.name}</Link>
              ))}
          </div>


          {/* Projects columns */}
          <div class="items-center md:items-start flex flex-col text-center md:text-left mt-1 md:mt-0 space-y-1"> 
            <h4 class="text-xl font-medium">Projects</h4>
            {/* Maps first 3 entries */}
            {projectsColumn.map((item, index) => 
              index < 3 && (
                <Link class="hover:underline" to={item.path}>{item.name}</Link>
              )
            )}
          </div>

          <div class="flex flex-col md:justify-end text-center md:text-left space-y-1"> 
          {/* Maps final 3 entries */}
          {projectsColumn.map((item, index) => 
              index >= 3 && (
                <Link class="hover:underline" to={item.path}>{item.name}</Link>
              )
            )}
          </div>
        </div>

        {/* Footnote */}
        <div class="flex py-2 justify-between border-t-2 border-primary">
          <a class="hover:text-primary" href="https://www.joshhaywood-portfolio.com/">© Josh Haywood {new Date().getFullYear()}</a>

          <div id="backToTop" class="flex flex-row space-x-1 items-center"> {/* Container used in place of span as CSS doesnt effect span correctly */}
            <button onClick={() => {document.documentElement.scrollTop = 0}}>Back To Top</button>
            <p>↑</p>
          </div>
        </div>
      </div>
    </footer>
  )
}