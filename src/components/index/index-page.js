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

            <Hero />
            <div className="py-10 md:py-20 xl:py-40 bg-quinary w-screen"> {/* Parents allows background to exceed childs' max width */}
                <About />
            </div>
            <div className="py-10 md:py-20 xl:py-40 bg-tertiary w-screen">
                <Projects />                    
            </div>
            <div className="py-10 md:py-20 xl:py-40 bg-quinary w-screen">
                <Contact />
            </div>
        </>
    );
}