import { Helmet } from "react-helmet";

import Hero from "../components/index/hero/Hero";
import Skills from "../components/index/Skills";
import About from "../components/index/About";
import Projects from "../components/index/projects/Projects";
import Contact from "../components/index/Contact";

export default function Index() {
  const components = [
    { name: "About", component: About },
    { name: "Skills", component: Skills },
    { name: "Projects", component: Projects },
    { name: "Contact", component: Contact },
  ];

  return (
    <>
      <Helmet>
        <title>Josh Haywood | Portfolio</title>
      </Helmet>

      <>
        <Hero />

        <div class="max-w-[1100px] mt-20 sm:mt-28 mb-36 md:mb-56 lg:mb-64 mx-auto px-5 xl:px-0 space-y-32 md:space-y-48 xl:space-y-56">
          {components.map((component, index) => (
              <component.component key={index} />
          ))}
        </div>
      </>
    </>
  );
};