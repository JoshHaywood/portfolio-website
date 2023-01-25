import { motion } from "framer-motion";

import { GithubLink, DeployLink } from "./SocialLinks"

export default function FeaturedProjects(props) {
  const { sidebar, setSidebar, setProjectName } = props;

  const cardsData = [
    {
      image: "portfolio-thumbnail.webp",
      name: "portfolio",
      tagline: "Portfolio Website",
      heading: "Portfolio Website",
      description: "My portfolio website which includes my latest projects and serves as a point of contact for potential clients and employers, it's constantly updated to reflect my development progress.",
      technologies: ["Handlebars/React", "ExpressJS", "NodeJS", "CSS/Tailwind"],
      githubLink: "https://github.com/JoshHaywood/portfolio-website",
      deployLink: "https://www.joshhaywood-portfolio.com/",
      alignment: "right"
    },
    {
      image: "one-messaging-thumbnail.webp",
      name: "one-messaging",
      tagline: "Messaging Project",
      heading: "One messaging project",
      description: "A real-time messaging app, developed as a research project on web communication systems advancement during my second year of university.",
      technologies: ["Handlebars", "ExpressJS", "NodeJS", "Socket.io", "SQlite"],
      githubLink: "https://github.com/JoshHaywood/one-messaging",
      deployLink: "/error",
      alignment: "left"
    }
  ];

  return (
    cardsData.map((card, index) => {
      return (
        <div
          key={index}
          onClick={() => {setProjectName(card.name)}}
          class={`${card.alignment === `right` ? `md:flex-row-reverse bg-[url('../public/images/portfolio-thumbnail.webp')]` : `bg-[url('../public/images/one-messaging-thumbnail.webp')]`} relative   md:bg-none bg-fit bg-no-repeat bg-center shadow-[inset_0_2000px_0_0_rgba(76,107,193,0.3)] md:shadow-none md:flex md:flex-row hover:cursor-pointer`}
        >
          {/* Image */}
          <div                 
            onClick={() =>setSidebar(!sidebar)}
            class={`hidden md:block md:w-3/5 md:relative md:overflow-hidden ${card.alignment === "right" ? "order-2" : "order-1" }`}
          >
            <div class="hover:scale-105 transition duration-300 ease-in-out">
              {/* Image overlay */}
              <div class="absolute bg-primary w-full h-full z-10 opacity-30 md:hover:opacity-0 transition duration-500 ease-in-out"></div>
  
              <img
                src={`../images/${card.image}`}
                alt={`Featured project ${card.tagline}`}
                class="rounded max-w-[600px]"
              >
              </img>
            </div>
          </div>

          {/* Project information */}
          <div class={`p-5 sm:px-5 md:px-0 sm:py-16 md:py-10 backdrop-brightness-[0.3] md:backdrop-brightness-100 md:z-10 md:w-2/5 ${card.alignment === "right" ? "md:text-right" : "md:text-left"}`}>
            <div
              onClick={() =>setSidebar(!sidebar)}
              class="font-normal text-primary">{card.tagline}
            </div>
            <h3                 
              onClick={() =>setSidebar(!sidebar)}
              class="mb-5 font-2xl font-semibold text-primary-text hover:text-primary transition duration-300 ease-in-out"
            >
              {card.heading}
            </h3>
      
            <p 
              onClick={() =>setSidebar(!sidebar)}
              class={`${card.alignment === "right" ? "md:pl-10 md:pr-5 md:-ml-32" : "md:pl-5 md:pr-10 md:-mr-32"} bg-none md:bg-quaternary sm:pt-5 pb-5 md:shadow-md md:rounded-sm text-gray-300`}
            >
              {card.description}
            </p>
      
            {/* Technologies */}
            <div>
              {/* Stack list */}
              <ul               
                onClick={() =>setSidebar(!sidebar)}
                class={`flex flex-row flex-wrap gap-x-2.5 sm:gap-x-0 sm:space-x-5 ${card.alignment === "right" ? "md:justify-end" : "md:justify-none"} md:mt-5`}
              >
                {card.technologies.map(tech => <li>{tech}</li>)}
              </ul>
      
              {/* Media links */}
              <div class={`flex flex-row mt-5 ${card.alignment === "right" ? "md:justify-end" : "md:justify-start"} space-x-2.5`}>
                <GithubLink link={card.githubLink} width="1.25rem" height="1.25rem" />
                <DeployLink link={card.deployLink} width="1.25rem" height="1.25rem" />
              </div>
            </div>
          </div>
        </div> 
      )
    })
  );
};