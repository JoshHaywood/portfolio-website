import { Helmet } from "react-helmet";

import Hero from "../components/index/hero";
import Skills from "../components/index/skills";
import About from "../components/index/about";
import Projects from "../components/index/projects";
import Contact from "../components/contact";

export default function Index(props) {
  const hasLoaded = props.hasLoaded; //Matches bool to passed prop

  return (
    <>
      <Helmet>
        <title>Josh Haywood | Portfolio</title>
      </Helmet>

      <div class="-mt-5 -mb-6">
        {/* Prevent header and footer gaps */}
        <Hero
          taglineDelay={0.5}
          headingOneDelay={0.7}
          headingTwoDelay={0.9}
          textDelay={1.1}
          scrollButtonDelay={1.3}
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
      </div>
    </>
  );
};