import { Helmet } from "react-helmet";

import Hero from "../components/index/hero/Hero";
import Skills from "../components/index/Skills";
import About from "../components/index/About";
import Projects from "../components/index/projects/Projects";
import Contact from "../components/index/Contact";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Josh Haywood | Portfolio</title>
      </Helmet>

      <>
        <Hero />

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