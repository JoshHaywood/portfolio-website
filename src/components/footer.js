import { Link } from 'react-router-dom';

const columns = [
    { 
      heading: 'Pages', 
      links: [
          { label: 'Home', path: '/' },
          { label: 'Projects', path: '/projects' },
          { label: 'Contact', path: '/contact' },
      ],
    },
    { 
      heading: 'Projects',
      links: [
        { label: 'Portfolio', path: '/projects/portfolio' },
        { label: 'Arduino', path: '/projects/arduino' },
        { label: 'Student Survival Store', path: '/projects/student-survival-store' },
      ],
    },
    { 
      containerStyle: 'flex flex-col justify-end',
      links: [
        { label: 'One Messaging', path: '/projects/one-messaging' },
        { label: 'Esports Center', path: '/projects/esports-center' },
        { label: 'Game Review', path: '/projects/game-review' }
      ],
    },
];

export default function Footer() {
  return (
		<footer class="bg-tertiary">
      <div class="px-16 max-w-[1000px] mx-auto">
        <div class="items-center flex flex-col md:flex-row md:justify-between pt-5 pb-4">
          <div class="mt-6 lg:mt-3 lg:flex-1">
            {/* Columns */}
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {columns.map((column, index) => 
                <div key={index} class={column.containerStyle}>
                  <h4 class="text-base font-bold text-white">{column.heading}</h4>
                  
                  {/* Links */}
                  {column.links.map((link, index) => (
                    <Link 
                      key={index} 
                      to={link.path} 
                      class="mt-2 block text-sm text-white hover:underline">{link.label}</Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div class="flex py-2 justify-between border-t-2 border-primary">
          <a class="hover:text-primary" href="https://www.joshhaywood-portfolio.com/">© Josh Haywood {new Date().getFullYear()}</a>

          <div id="backToTop" class="flex flex-row space-x-1 items-center">
            <button onClick={() => {document.documentElement.scrollTop = 0}}>Back To Top</button>
            <div class="text-secondary-text">↑</div>
          </div>
        </div>
      </div>
    </footer>
  );
};