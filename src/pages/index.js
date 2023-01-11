import { Helmet } from "react-helmet";

import Hero from "../components/index/hero";
import Skills from "../components/index/skills";
import About from "../components/index/about";
import Projects from "../components/index/projects";
import Contact from "../components/contact";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Josh Haywood | Portfolio</title>
      </Helmet>

      <>
        <Hero
          taglineDelay={0.9}
          headingOneDelay={1.1}
          headingTwoDelay={1.3}
          textDelay={1.5}
          scrollButtonDelay={1.7}
        />

        <div class="space-y-32 md:space-y-48 xl:space-y-56 mt-20 sm:mt-28 mb-36 md:mb-56 lg:mb-64">
          <div class="px-5 xl:px-0 mx-auto max-w-[1100px]">
            <Skills />
          </div>

          <div class="px-5 xl:px-0 mx-auto max-w-[1100px]">
            {/* Multiple parents created to not alter absolute of background elements */}
            <About />
          </div>
          <div class="px-5 xl:px-0 mx-auto max-w-[1100px]">
            <Projects />
          </div>
          <div class="px-5 xl:px-0 mx-auto max-w-[1100px]">
            <Contact />
          </div>
        </div>
      </>
    </>
  );
};