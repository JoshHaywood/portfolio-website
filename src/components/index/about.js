import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Heading from '../heading';
import Rating from './rating';

const columns = [
  {
    technologies: [
      { label: 'HTML', rating: 4 },
      { label: 'SASS', rating: 3 },
      { label: 'JavaScript', rating: 4 },
    ],
  },
  {
    technologies: [
      { label: 'TailwindCSS', rating: 4 },
      { label: 'Node.js', rating: 4 },
      { label: 'React', rating: 4 },
    ],
  },
  {
    technologies: [
      { label: 'Axios', rating: 4 },
      { label: 'Express', rating: 4 },
      { label: 'Heroku', rating: 3 },
    ],
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      class="space-y-12"
    >
      {/* Heading */}
      <Heading heading={"About Me"} />

      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 pb-12 md:pb-0">
        {/* Image */}
        <a
          href="https://github.com/JoshHaywood"
          class="order-2 md:order-1 w-1/3 relative top-12 md:top-3 md:left-3 border-2 border-primary rounded-md"
        >
          <img
            src="../Images/portrait.webp"
            alt="developer portrait"
            class="w-full rounded-md relative bottom-3 right-3 hover:bottom-0 hover:right-0 hover:cursor-pointer transition-all duration-300 ease-in-out"
          ></img>
        </a>

        {/* Background information */}
        <div class="order-1 md:order-2 flex flex-col space-y-4 w-full md:w-2/3 leading-7">
          <p>
            I am a student at <a href="https://www.falmouth.ac.uk" class="font-semibold text-primary hover:underline">Falmouth University</a> from Devon, England studying
            for a BSc in Web Development. My main interests lie in front-end,
            full-stack, and user interface development and design. I have
            recently been focusing on creating React and Node.js applications
            hosted on the cloud, as well as marketing myself through my
            portfolio site and CV.
          </p>

          <p>
            I make use of the latest web development trends and technologies,
            and I am always looking for new ways to improve my skills. One of my
            standout achievements is creating an <Link to="#" class="font-semibold text-primary hover:underline">e-commerce site</Link> as part of a
            mixed-method study into UX and UI design, and creating a <Link to="projects/one-messaging" class="font-semibold text-primary hover:underline">real-time
            messaging system</Link>, both of which received high praise from my peers
            and instructors.
          </p>

          {/* Technologies list */}
          <p class="text-gray-400">Technologies I have been using recently:</p>

          <div class="grid grid-cols-3 gap-10 bg-tertiary px-5 pb-5">
            {columns.map((column, index) => (
              <ul key={index}>
                {column.technologies.map((technology, index) => (
                  <li key={index}>
                    <div class="mt-5 mb-1 text-sm text-white">
                      {technology.label}
                    </div>

                    <Rating rating={technology.rating} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};