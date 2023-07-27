import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { GithubLink, DeployLink } from "./SocialLinks";

const cardsData = [
  {
    image: "portfolio-thumbnail.webp",
    name: "portfolio",
    tagline: "Portfolio Website",
    heading: "Portfolio Website",
    description:
      "My portfolio website which includes my latest projects and serves as a point of contact for potential clients and employers, it's constantly updated to reflect my development progress.",
    technologies: ["Handlebars/React", "ExpressJS", "NodeJS", "CSS/Tailwind"],
    githubLink: "https://github.com/JoshHaywood/portfolio-website",
    deployLink: "https://www.joshhaywood-portfolio.com/",
    alignment: "right",
  },
  {
    image: "tech-terminus-thumbnail.jpg",
    name: "tech-terminus",
    tagline: "Ecommerce Website",
    heading: "Dissertation project",
    description:
      "Artefact A of an A/B test used as part of my scientific study on the impact of interfaces and design on user experiences in web-based applications.",
    technologies: ["React", "ExpressJS", "NodeJS", "Axios", "MySQL"],
    githubLink: "https://github.com/JoshHaywood/tech-terminus",
    deployLink: "http://www.tech-terminus.me/",
    alignment: "left",
  },
];

export default function FeaturedProjects(props) {
  const { sidebar, setSidebar, setProjectName } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return cardsData.map((card) => {
    return (
      <div
        key={card.name}
        onClick={() => {
          setProjectName(card.name);
        }}
        className={`${
          card.alignment === `right`
            ? `md:flex-row-reverse bg-[url('../public/images/portfolio-thumbnail.webp')]`
            : `bg-[url('../public/images/tech-terminus-thumbnail.jpg')]`
        } relative md:bg-none bg-fit bg-no-repeat bg-center shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:shadow-none md:flex md:flex-row hover:cursor-pointer`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: "5%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          onClick={() => setSidebar(!sidebar)}
          className={`hidden md:block md:w-3/5 md:relative md:overflow-hidden rounded ${
            card.alignment === "right" ? "order-2" : "order-1"
          }`}
        >
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            {/* Image overlay */}
            <div className="absolute bg-[#5e221e] min-w-[660px] min-h-[372px] z-10 opacity-30 md:hover:opacity-0 transition duration-500 ease-in-out"></div>

            <img
              src={`../images/${card.image}`}
              alt={`Featured project ${card.tagline}`}
              className="min-w-[660px] min-h-[372px]"
            ></img>
          </div>
        </motion.div>

        {/* Project information */}
        <motion.div
          initial={{
            opacity: 0,
            x: isMobile ? 0 : card.alignment === "right" ? "2.5%" : "-2.5%",
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`p-5 sm:px-5 md:px-0 sm:py-16 md:py-10 backdrop-brightness-[0.3] md:backdrop-brightness-100 md:z-10 md:w-2/5 ${
            card.alignment === "right" ? "md:text-right" : "md:text-left"
          }`}
        >
          <div
            onClick={() => setSidebar(!sidebar)}
            className="font-normal text-primary"
          >
            {card.tagline}
          </div>
          <h3
            onClick={() => setSidebar(!sidebar)}
            className="mb-5 text-3xl font-semibold text-primary-text text-white hover:text-primary transition duration-300 ease-in-out"
          >
            {card.heading}
          </h3>

          <p
            onClick={() => setSidebar(!sidebar)}
            className={`${
              card.alignment === "right"
                ? "md:pl-10 md:pr-5 md:-ml-32"
                : "md:pl-5 md:pr-10 md:-mr-32"
            } bg-none md:bg-tertiary sm:pt-5 pb-5 md:shadow-md md:rounded text-gray-300`}
          >
            {card.description}
          </p>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: isMobile ? 0.5 : 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            {/* Stack list */}
            <ul
              onClick={() => setSidebar(!sidebar)}
              className={`flex flex-row flex-wrap gap-x-2.5 sm:gap-x-0 sm:space-x-5 ${
                card.alignment === "right"
                  ? "md:justify-end"
                  : "md:justify-none"
              } md:mt-5 text-gray-500`}
            >
              {card.technologies.map((tech) => (
                <li key={tech.name}>{tech}</li>
              ))}
            </ul>

            {/* Media links */}
            <div
              className={`flex flex-row mt-5 ${
                card.alignment === "right"
                  ? "md:justify-end"
                  : "md:justify-start"
              } space-x-2.5`}
            >
              <GithubLink
                link={card.githubLink}
                width="1.25rem"
                height="1.25rem"
              />
              <DeployLink
                link={card.deployLink}
                width="1.25rem"
                height="1.25rem"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  });
}
