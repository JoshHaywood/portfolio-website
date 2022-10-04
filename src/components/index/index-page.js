import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from './hero';
import Skills from './skills';
import About from './about';
import Projects from './projects';
import Contact from '../contact';

export default function Index(props) {
    const hasLoaded = props.hasLoaded; //Matches bool to passed prop

    return (
        <>
            <Helmet>
                <title>Josh Haywood | Portfolio</title>
            </Helmet>

            <div className="-mt-5 -mb-6"> {/* Prevent header and footer gaps */}
                <>
                    {hasLoaded ? (
                        /* If loading screen has already been completed reduce delay */
                        <Hero 
                            taglineDelay = {0.5}
                            headingOneDelay = {0.7}
                            headingTwoDelay = {0.9}
                            textDelay = {1.1}
                        />
                    ) : (
                        /* Else increase delay to match load time */
                        <Hero 
                            taglineDelay = {3.3}
                            headingOneDelay = {3.5}
                            headingTwoDelay = {3.7}
                            textDelay = {4.1}
                        />
                    )}
                </>

                <div className="space-y-32 md:space-y-48 xl:space-y-56 mt-20 sm:mt-28 mb-36 md:mb-56 lg:mb-64">
                    <div className="px-5 sm:px-10 mx-auto max-w-[1000px]">
                        <Skills />
                    </div>
                    
                    <div className="px-5 sm:px-10 mx-auto max-w-[1000px]"> {/* Multiple parents created to not alter absolute of background elements */}
                        <About />
                    </div>
                    <div className="px-5 sm:px-10 mx-auto max-w-[1100px]"> {/* Allows background to exceed width */}
                        <Projects />                    
                    </div>
                    <div className="px-10 md:px-0 max-w-[650px] mx-auto">
                        <Contact 
                            heading={<h2 className="font-semibold text-4xl text-center">Contact</h2>}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}