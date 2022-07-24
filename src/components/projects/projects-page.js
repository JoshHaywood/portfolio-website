import * as React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import Slider from "./slider";

export default function Projects() {
    const items = [
        {
            cardPath: "/projects/portfolio", 
            iconPath: "https://github.com/El-Goblino/portfolio-website",
            heading: "Portfolio Website",
            textFirst: "My website showcasing projects i've created as well as a hub for marketing and contact.",
            textSecond: "Specifically, my first version of the portfolio site and how ive adapted the project since then.",
            link: "/projects/portfolio"
        },
    
        {
            cardPath: "/projects/arduino", 
            iconPath: "/error",
            heading: "Arduino Unity Project",
            textFirst: "An arduino game and controller I made in my first year of University.",
            textSecond: "This was my introduction into how psychical components can interact with game engines",
            link: "/projects/arduino"
        },
    
        {
            cardPath: "/projects/student-survival-store", 
            iconPath: "https://github.falmouth.ac.uk/LW254830/Student-Survival-Store",
            heading: "Student Survival Store",
            textFirst: "Software as a service group project from my second year of University.",
            textSecond: "A group project based around a monthly subscription based product service.",
            link: "/projects/student-survival-store"
        },
    
        {
            cardPath: "/projects/one-messaging",
            iconPath: "https://github.falmouth.ac.uk/JH248828/2005220_Comp260-A1-A2", 
            heading: "One Messaging Project",
            textFirst: "A realtime messaging app I made in my second year of University.",
            textSecond : "This was project portion of my research into the advancement web communication systems.",
            link: "/projects/one-messaging"
        },
    
        {
            cardPath: "/projects/esports-center", 
            iconPath: "https://github.falmouth.ac.uk/JH248828/Web220_A2-eSports-Center",
            heading: "The Esports Center",
            textFirst: "Statistics tracking group project from my second year of University.",
            textSecond: "A project I lead as project leader, looking into the rise of Esports.",
            link: "/projects/esports-center"
        },
    
        {
            cardPath: "/projects/game-review", 
            iconPath: "https://github.com/El-Goblino/game-review-app",
            heading: "Game Review",
            textFirst: "Website for reviewing video games",
            textSecond: "Targeted at improving my knowledge in functional based React and web design",
            link: "/projects/game-review"
        }
    ];

    //Animation
    let containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.5,
          }
        }
      };
      
    let listVariants = {
        hidden: { opacity: 0, y: '5%' },
        visible: { 
          opacity: 1,
          y: 0,
  
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          } 
        }
      };    
      
      return (
        <>
            <Helmet>
                <title>Projects | Josh Haywood</title>
            </Helmet>
            
            <motion.div className="pt-44 pb-16 md:pb-48 max-w-[1000px] mx-5 md:mx-auto space-y-12"
                initial= {{ opacity: 0, y: '5%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
            >        
                {/* Heading */}
                <div className="space-y-3 mx-auto">
                    <h2 className="font-semibold text-center">Projects</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <Slider />

                <motion.div id="projectCardContainer" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 lg:space-y-0 lg:grid grid-rows-2 grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6"> 
                    {items.map((items) => 
                        //Project card
                        <motion.div id="projectCard" variants={listVariants} className="shadow-md shadow-[rgba(76,107,193,0.2)] rounded-md sm:mx-20 md:mx-36 lg:mx-0 hover:-translate-y-4 transition duration-300 ease-in-out">
                            <div className="bg-quaternary rounded-md rounded-b-none space-y-3 px-3 pb-5 lg:pb-60 inline-block lg:max-h-[280px] w-full">
                                {/* Image */}
                                    <div className="flex justify-between">
                                        <Link to={items.cardPath}>
                                            <svg className="h-auto w-8 pt-4 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> {/* Attribution: https://fontawesome.com/icons/folder?s=regular */}
                                                <path d="M447.1 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.66-64 64v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C511.1 124.7 483.3 96 447.1 96zM463.1 416c0 8.824-7.178 16-16 16h-384c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L255.1 144h192c8.822 0 16 7.176 16 16V416z"/>
                                            </svg>
                                        </Link>

                                        <a href={items.iconPath}>
                                            <svg className="h-auto w-5 pt-5 hover:text-primary transition duration-300 ease-in-out" alt="Github logo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" classname="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                            </svg>
                                        </a>
                                    </div>
                                

                                {/* Text */}
                                <div className="space-y-3 lg:flex flex-col"> {/* Specific height to keep cards same dimensions */}
                                    <h5 className="font-semibold text-gray-300 transition duration-300 ease-in-out">{items.heading}</h5>
                                    
                                    <p className="text-gray-400">{items.textFirst}</p>
                                    <p className="text-gray-400">{items.textSecond}</p>
                                </div>
                            </div>
                            
                            {/* Button */}
                            <div className="bg-quaternary text-center rounded-md rounded-t-none p-3 mt-1">
                                <Link className="text-primary-text hover:text-secondary-text" to={items.link}>View Project →</Link>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}