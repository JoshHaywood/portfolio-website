import * as React from 'react';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contact from '../contact';
import { Helmet } from "react-helmet";

export default function Index() {
    return (
        <>
            <Helmet>
                <title>Josh Haywood | Portfolio</title>
            </Helmet>

            <div className="space-y-10 md:space-y-20 xl:space-y-40">
                <Hero />
                <div className="px-5 sm:px-10 mx-auto max-w-[1000px]"> {/* Multiple parents created to not alter absolute of background elements */}
                    <About />
                </div>
                <div className="px-5 sm:px-10 bg-tertiary w-screen"> {/* Allows background to exceed width */}
                    <Projects />                    
                </div>
                <div className="px-10 md:px-0 pb-16 md:pb-28 lg:pb-52 max-w-[650px] mx-auto">
                    <Contact />
                </div>
            </div>
        </>
    );
}