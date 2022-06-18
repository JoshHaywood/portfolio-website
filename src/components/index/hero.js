import * as React from 'react';
import Button from '@mui/material/Button';

export default function Hero() {
    const items = []

    //Creates array of 10
    for (var i = 0; i < 10; i++) {
        items.push(i);
    }

    return (
        <div className="h-screen relative flex flex-col">
            {/* Background video */}
            <video autoPlay muted loop className="w-full h-screen object-cover brightness-50 blur-sm"> {/* Object cover allows videos aspect ratio to be overridden */}
                {/* Attribution:https://pixabay.com/videos/circuit-electronics-digital-27725/ by motionstock */}
                <source src="../videos/background.mp4" type="video/mp4"/>
                Your browser does not support videos
            </video>

            <div className="absolute lg:left-[20%] h-screen flex flex-col justify-center mx-10 lg:mx-auto z-10 space-y-6 leading-10 sm:leading-none">
                {/* Text */}
                <div className="space-y-3 md:space-y-6"> {/* Prevents text being effected by flex */}
                    <h3 id="heroText" className="text-primary animate-fade-in-up">Hi, my name is</h3>
                    <h1 id="heroText" className="sm:text-5xl md:text-6xl font-semibold animate-fade-in-up animation-delay-200">Josh Haywood</h1>
                    <h1 id="heroText" className="sm:text-5xl md:text-6xl font-semibold text-gray-400 animate-fade-in-up animation-delay-400">An aspiring web developer</h1>
                    <p id="heroText" className="text-xl sm:w-[80%] md:w-[60%] lg:w-[48%] text-gray-400 animate-fade-in-up animation-delay-600">
                        Im currently a Web Development student at <a id="heroLink" href="https://www.falmouth.ac.uk/"><span className='font-semibold text-primary text-xl'>Falmouth University</span></a> in my final year of a BSC.
                        Currently im focused on specializing in front-end development.
                    </p>
                </div>

                {/* Media Icons */}
                <div id="heroText" className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 space-x-6 animate-fade-in-up animation-delay-800">
                    <div className="flex pr-[0.9rem] sm:pr-0">
                        <Button
                            sx={{
                                    backgroundColor: '#181a1d',
                                    color: 'white',
                                    paddingRight: '1.9rem',

                                    ':hover': {
                                        bgcolor: 'rgba(24, 26, 29, 0.8)', 
                                    },
                                }}
                        >
                        View my Github
                        </Button>                            
                    
                        <a href="https://github.com/El-Goblino/" className="h-4 w-4 -ml-[24px] mt-[9px] z-10">
                            <svg alt="Github logo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" classname="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                    </div>

                    <div className="flex pr-[2.5rem] sm:pr-0">
                        <Button
                            sx={{
                                    border: '2px solid #4c6bc1',
                                    color: 'white',
                                    paddingRight: '1.9rem',

                                    ':hover': {
                                        bgcolor: 'rgba(76, 107, 193, 0.3)',
                                    },
                                }}
                        >
                        View my Linked In
                        </Button>                            
                                
                        <a href="https://www.linkedin.com/in/josh-haywood-b70a24233/" className="h-4 w-4 -ml-[26px] mt-[9px] fill-white">
                            <svg alt="Linkedin logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> {/* ! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}