import { motion } from "framer-motion";

import cards from "../../data/cards";
import Heading from "./Heading";

export default function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <Heading heading="Skill-Set" />

      {/* Cards */}
      <div className="h-full flex flex-col md:flex-row md:w-full mt-12 space-y-5 md:space-y-0 md:space-x-5 lg:space-x-10">
        {cards.map((card) => (
          <div
            key={card.heading}
            className="relative w-full mx-auto md:w-1/3 px-5 pt-10 sm:pt-5 lg:pt-10 pb-20 space-y-8 bg-tertiary md:border-b md:border-primary md:rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-auto w-12 mb-5 sm:my-5 fill-primary"
            >
              <path d={card.path} />
            </svg>

            <h3 className="text-xl font-medium text-white">{card.heading}</h3>
            <p className="mt-4 text-gray-400">{card.text}</p>

            <div className="text-sm text-gray-600 absolute bottom-8">
              {card.projectNumber}+ projects
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
