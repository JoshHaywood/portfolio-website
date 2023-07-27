import { Helmet } from "react-helmet";

import components from "../data/components.js";
import Hero from "../components/index/hero/Hero";

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

      <div className="relative">
        {/* Sidebar overlay */}
        <div
          onClick={() => setSidebar(false)}
          className={`${
            sidebar
              ? `z-40 h-screen w-screen fixed bg-black opacity-70 backdrop-blur`
              : `hidden`
          }`}
        ></div>

        <Hero />

        <div className="max-w-[1100px] mt-20 sm:mt-28 mb-36 md:mb-56 lg:mb-64 mx-auto px-5 xl:px-0 space-y-32 md:space-y-48 xl:space-y-56">
          {components.map((component, index) =>
            // If index is 0 or 2, render About and Projects component with sidebar state
            index === 0 || index === 2 ? (
              <component.component
                key={component.name}
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
