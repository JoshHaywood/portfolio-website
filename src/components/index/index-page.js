import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from './hero';
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

            <div className="space-y-10 md:space-y-20 xl:space-y-40">
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
    )
}