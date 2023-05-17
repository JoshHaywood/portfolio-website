import { Helmet } from "react-helmet";

import Hero from "../components/index/hero/Hero";
import Skills from "../components/index/Skills";
import About from "../components/index/About";
import Projects from "../components/index/projects/Projects";
import Contact from "../components/index/Contact";

const components = [
  { name: "About", component: About },
  { name: "Skills", component: Skills },
  { name: "Projects", component: Projects },
  { name: "Contact", component: Contact },
];

export default function Index(props) {
  const { sidebar, setSidebar, projectName, setProjectName } = props;

  // If sidebar is open disable scroll
  if (sidebar) {
    document.body.style.overflow = "hidden";
    //Else enable scroll
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <Helmet>
        <title>Josh Haywood | Portfolio</title>
      </Helmet>

      <div class="relative">
        {/* Sidebar overlay */}
        <div
          onClick={() => setSidebar(false)}
          class={`${
            sidebar
              ? `z-50 h-screen w-screen fixed bg-black opacity-70 backdrop-blur`
              : `hidden`
          }`}
        ></div>

        <Hero />

        <div class="max-w-[1100px] mt-20 sm:mt-28 mb-36 md:mb-56 lg:mb-64 mx-auto px-5 xl:px-0 space-y-32 md:space-y-48 xl:space-y-56">
          {components.map((component, index) =>
            // If index is 0 or 2, render About and Projects component with sidebar state
            index === 0 || index === 2 ? (
              <component.component
                key={index}
                sidebar={sidebar}
                setSidebar={setSidebar}
                projectName={projectName}
                setProjectName={setProjectName}
              />
            ) : (
              <component.component key={index} />
            )
          )}
        </div>
      </div>
    </>
  );
}
