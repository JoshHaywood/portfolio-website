import { motion } from "framer-motion";

const columns = [
  {
    technologies: [
      { label: 'HTML' },
      { label: 'CSS' },
      { label: 'JavaScript' },
    ],
  },
  {
    technologies: [
      { label: 'Tailwind' },
      { label: 'Node.js' },
      { label: 'React' },
    ],
  },
  {
    technologies: [
      { label: 'Material UI' },
      { label: 'Git' },
      { label: 'Heroku' },
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
      <div class="space-y-3 mx-auto">
        <h2 class="font-semibold text-4xl text-center">About Me</h2>
        <div class="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      {/* Background information */}
      <div class="flex flex-col md:flex-row md:justify-evenly items-center md:items-start md:space-x-10 space-y-[4rem] md:space-y-0">
        <div class="flex flex-col space-y-4 w-100% md:w-3/5 leading-7">
          <p>
            I am a student from Devon, England, currently studying for a BSc in Web Development.
            My passion for web development grew out of my educational background in information technologies and computer software.
          </p>

          <p>
            My main interests lie in front-end, full-stack, and user interface development and design, and I have recently been focusing on learning React, Sass, Azure, and marketing myself through my portfolio site and CV.
            Some of the technologies I have been using recently include HTML, CSS, JavaScript, Tailwind, Node.js, React, Material UI, Git, and Heroku.
          </p>

          <p class="text-gray-400">Technologies I have been using recently</p>
          <div class="grid grid-cols-3">
            {columns.map((column, index) => (
              <ul key={index}>
                {column.technologies.map((item, index) => (
                  <li
                    key={index}
                    class="list-disc marker:text-primary ml-4 text-sm"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          id="hero-image"
          class="max-w-[200px] sm:max-w-[300px] border-2 border-primary rounded-md h-min relative mx-auto md:top-5 left-5"
        >
          <img
            src="../Images/portrait.webp"
            alt="developer portrait"
            class="rounded-md relative bottom-5 right-5"
          ></img>
        </div>
      </div>
    </motion.div>
  );
};