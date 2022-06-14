import * as React from 'react';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contact from '../contact';

export default function Index() {
    return (
        <div className="space-y-10 md:space-y-20 xl:space-y-40">
            <Hero />
            <div className="px-5 md:px-0 md:w-3/4 mx-auto"> {/* Multiple parents created to not */}
                <About />
            </div>
            <div className="px-5 md:px-0 bg-tertiary w-screen"> {/* Allows background to exceed width */}
                <Projects />                    
            </div>
            <div className="px-5 pb-16 md:pb-28 lg:pb-52 md:px-0 md:w-2/4 lg:w-2/5 mx-auto">
                <Contact />
            </div>
        </div>
    );
}