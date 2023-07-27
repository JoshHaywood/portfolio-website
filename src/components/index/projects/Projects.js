import { motion } from "framer-motion";

import Heading from "../Heading";
import ProjectCards from "./ProjectCards";
import Sidebar from "./Sidebar";
import FeaturedProjects from "./FeaturedProjects";

export default function Projects(props) {
  const { sidebar, setSidebar, projectName, setProjectName } = props;

  return (
    <div>
      {/* Heading */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: "5%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Heading heading={"Featured Projects"} />
      </motion.div>

      <div className="mt-12 space-y-10 lg:space-y-24">
        {/* Featured projects */}
        <FeaturedProjects
          sidebar={sidebar}
          setSidebar={setSidebar}
          setProjectName={setProjectName}
        />

        {/* Project cards */}
        <ProjectCards
          sidebar={sidebar}
          setSidebar={setSidebar}
          setProjectName={setProjectName}
          projectName={projectName}
        />
      </div>

      {/* Projects sidebar */}
      <Sidebar
        sideBar={sidebar}
        setSideBar={setSidebar}
        projectName={projectName}
      />
    </div>
  );
}
