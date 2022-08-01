import * as React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

export default function Hero(props) {
    //Animation Variants
    const heroVariants = {
        hidden: { 
            opacity: 0,
            y: '50%'
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className="relative flex flex-col justify-center w-full min-h-screen -z-10">
            {/* Background video */}
            <video autoPlay muted loop playsInline className="w-full flex-1 object-cover brightness-50 blur-sm" src="../videos/background.mp4" type="video/mp4"> {/* Object cover allows videos aspect ratio to be overridden */} {/* Attribution:https://pixabay.com/videos/circuit-electronics-digital-27725/ by motionstock */}
                Your browser does not support videos
            </video>

            <div className="absolute max-w-[1000px] flex-1 left-0 right-0 mx-auto px-5 xl:px-0 z-50 space-y-6 leading-10 sm:leading-none">
                {/* Text */}
                <div className="space-y-3 md:space-y-6"> {/* Prevents text being effected by flex */}
                    <motion.h3 
                        className="text-primary"
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: props.taglineDelay, ease: "easeInOut" }}
                    >
                        Hi, my name is
                    </motion.h3>
                    <motion.h1 
                        className="sm:text-5xl md:text-6xl font-semibold"
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: props.headingOneDelay, ease: "easeInOut" }}
                    >
                        Josh Haywood
                    </motion.h1>
                    <motion.h1 
                        className="sm:text-5xl md:text-6xl font-semibold text-gray-400"
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: props.headingTwoDelay, ease: "easeInOut" }}
                    >
                        An aspiring web developer
                    </motion.h1>
                    <motion.p 
                        className="text-xl max-w-[500px]"
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: props.textDelay, ease: "easeInOut" }}
                    >
                        I'm currently a Web Development student at <a id="heroLink" href="https://www.falmouth.ac.uk/"><span className='font-semibold text-primary text-xl'>Falmouth University</span></a> in my final year of a BSC.
                        At present i'm focused on specializing in front-end development.
                    </motion.p>
                </div>

                {/* Media Icons */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 space-x-6"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: props.textDelay, ease: "easeInOut" }}
                >
                    <a href="https://github.com/El-Goblino/">  
                        <div className="flex pr-[1.4rem] sm:pr-0">
                            <Button
                                sx={{
                                        border: '2px solid #181a1d', /* To match dimensions of other button without affecting padding */
                                        backgroundColor: '#181a1d',
                                        color: 'white',
                                        paddingRight: '1.9rem',
                                        width: '175px',

                                        ':hover': {
                                            bgcolor: 'rgba(24, 26, 29, 0.8)', 
                                        },
                                    }}
                            >
                            View my Github
                            </Button>                            
                            
                            <svg className="h-4 w-4 -ml-[34px] mt-[11px] z-10 text-white" alt="Github logo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" classname="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*! Attribution: https://fontawesome.com/icons/github?s=brands */} 
                                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/josh-haywood-b70a24233/">
                        <div className="flex pr-[2.5rem] sm:pr-0">
                            <Button
                                sx={{
                                        border: '2px solid #4c6bc1',
                                        color: 'white',
                                        paddingRight: '1.9rem',
                                        width: '175px',

                                        ':hover': {
                                            bgcolor: 'rgba(76, 107, 193, 0.3)',
                                        },
                                    }}
                            >
                            View my Linked In
                            </Button>                            

                            <svg className="h-4 w-4 -ml-[26px] mt-[11px] fill-white" alt="Linkedin logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> {/* Attribution: https://fontawesome.com/icons/linkedin-in?s=brands */} 
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                            </svg>
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    )
};