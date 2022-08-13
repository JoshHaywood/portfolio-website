import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Projects() {
    const items = [
        {
            imageSrc: '../Images/portfolio-thumbnail.webp',
            tagline: 'Personal Site',
            heading: 'Portfolio Website',
            text: `My website showcasing projects i've created as well as a hub for marketing and contact. Specifically, my first version of the portfolio site and how ive adapted the project since then.`,
            link: '/projects/portfolio',
            list: 'Handlebars/React ExpressJS CSS/Tailwind',
        },
    
        {
            imageSrc: '../Images/one-messaging-thumbnail.webp',
            tagline: 'Messaging Project',
            heading: 'One messaging project',
            text: 'A realtime messaging app I made in my second year of University. This was project portion of my research into the advancement web communication systems.',
            link: '/projects/one-messaging',
            list: 'Handlebars ExpressJS SocketIO SQLite',
        },
    ];  

    //Animation
    const isMobile = window.innerWidth < 768; 
    let containerVariants = {};
    let imageVariants = {};
    let leftCardVariants = {};
    let rightCardVariants = {};
    let listVariants = {};

    let textVariants = {};

    //Prevents animations on mobile
    if (!isMobile) {
        //Animation Variants
        //Parent container that holds properties
        containerVariants = {
            hidden: {},
            visible: {},
        };
        
        //Individual component animations
        imageVariants = {
            hidden: { opacity: 0, y: '3%' },
            visible: { 
                opacity: 1,
                y: 0,

                transition: {
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'easeInOut',
                } 
            }
        };

        leftCardVariants = {
            hidden: { opacity: 0, x: '-10%' },
            visible: {
                opacity: 1, 
                x: 0,

                transition: {
                    duration: 0.5,
                    delay: 1.3,
                    ease: 'easeInOut',
                } 
            }
        };

        rightCardVariants = {
            hidden: { opacity: 0, x: '10%' },
            visible: { 
                opacity: 1,
                x: 0,

                transition: {
                    duration: 0.5,
                    delay: 1.3,
                    ease: 'easeInOut',
                } 
            }
        };

        listVariants = {
            hidden: { opacity: 0 },
            visible: { 
                opacity: 1,

                transition: {
                    duration: 0.5,
                    delay: 1.8,
                    ease: 'easeInOut',
                } 
            }
        };
    }

    else {
        imageVariants = {
            hidden: { 
                opacity: 0,
                y: '5%'
            },
            visible: { 
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: 'easeInOut',
                }
            },
        };

        leftCardVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1, 

                transition: {
                    duration: 0.5,
                    delay: 1.3,
                    ease: 'easeInOut',
                } 
            }
        };

        rightCardVariants = {
            hidden: { opacity: 0 },
            visible: { 
                opacity: 1,

                transition: {
                    duration: 0.5,
                    delay: 1.3,
                    ease: 'easeInOut',
                } 
            }
        };

        listVariants = {
            hidden: { opacity: 0 },
            visible: { 
                opacity: 1,

                transition: {
                    duration: 0.5,
                    delay: 1.3,
                    ease: 'easeInOut',
                } 
            }
        };
    };

    return (
        <div className="max-w-[1000px] mx-auto pt-20 md:pt-16 xl:pt-36 pb-12 md:pb-20 xl:pb-40"> 
            {/* Heading */}
            <div className="space-y-3 mx-auto"> 
                <h2 className="font-semibold text-center">Featured Projects</h2>
                <div className="w-48 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Project section */}
            <>
                {items.map((items, index) => 
                    index == 0 && (
                        //Project One
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}> {/* Motions own container as not compatible with Link */}
                            <Link to={items.link} >
                                <div className="mt-12 md:space-x-10 flex md:flex-row items-center text-left md:text-right"> {/* Objects mapped ID used so all mapped elements have scroll listener applied */}
                                    {/* Image */}
                                        <motion.div variants={imageVariants} className="relative overflow-hidden"
                                        > {/* Container for overlaying child elements */}
                                            <div className="hover:animate-pop-out">  {/* Animation added as child so parent elements scale isnt effected */}
                                                <div className="absolute bg-primary w-full h-full z-10 brightness-[20%] md:brightness-100 opacity-90 md:opacity-30 md:hover:opacity-0 transition duration-300 ease-in-out"></div>
                                                <img className="rounded-sm max-w-[600px] h-[337px]" alt="Image of feature project" src={items.imageSrc}></img>
                                            </div>
                                        </motion.div>

                                        {/* Text card */}
                                        <motion.div className="flex flex-col items-start md:items-end z-20 max-w-[600px] md:w-2/5 mx-5 pb-5 absolute md:static">
                                            <motion.div variants={rightCardVariants}>
                                                <h6 className="text-primary">{items.tagline}</h6>
                                                <h4 className="mb-5 font-semibold text-primary-text">{items.heading}</h4>

                                                <p className="bg-none md:bg-quaternary md:pl-10 pr-5 sm:pt-5 pb-5 md:-ml-32 shadow-md hover:shadow-lg rounded-sm text-gray-300">
                                                    {items.text}
                                                </p>
                                            </motion.div>
       
                                            {/* Stack list */}
                                            <motion.ul variants={listVariants} id="projectList" className="flex flex-row sm:pt-5">
                                                <li>{items.list}</li>
                                            </motion.ul>
                                        </motion.div>
                                    
                                </div>
                            </Link>
                        </motion.div>
                    )
                )}
                    
                {items.map((items, index) => 
                    index == 1 && (
                        //Project Two
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}> {/* Motions own container as not compatible with Link */}
                            <Link to={items.link}> {/* Motions own container as not compatible with Link */}
                                <div className="mt-8 lg:mt-24 md:space-x-10 flex md:flex-row items-center"> {/* Objects mapped ID used so all mapped elements have scroll listener applied */}
                                    {/* Text card */}
                                    <motion.div variants={textVariants} className="flex flex-col items-start z-20 max-w-[600px] md:w-2/5 mx-5 pb-5 absolute md:static">
                                        <motion.div variants={leftCardVariants}>
                                            <h6 className="text-primary">{items.tagline}</h6>
                                            <h4 className="mb-5 font-semibold text-primary-text">{items.heading}</h4>

                                            <p className="bg-none md:bg-quaternary text-left md:pl-5 pr-10 sm:pt-5 pb-5 md:-mr-32 shadow-md hover:shadow-lg rounded-sm text-gray-300">
                                                {items.text}
                                            </p>
                                        </motion.div>

                                        {/* Stack list */}
                                        <motion.ul variants={listVariants} id="projectList" className="flex flex-row sm:pt-5">
                                            <li>{items.list}</li>
                                        </motion.ul>
                                    </motion.div>

                                    {/* Image */}
                                    <motion.div variants={imageVariants} className="relative overflow-hidden"> {/* Container for overlaying child elements */}
                                        <div className="hover:animate-pop-out">  {/* Animation added as child so parent elements scale isnt effected */}
                                            <div className="absolute bg-primary w-full h-full z-10 brightness-[20%] md:brightness-100 opacity-90 md:opacity-30 md:hover:opacity-0 transition duration-300 ease-in-out"></div>
                                            <img className="rounded-sm max-w-[600px]" alt="Image of feature project" src={items.imageSrc}></img>
                                        </div>
                                    </motion.div>
                                </div>
                            </Link> 
                        </motion.div>
                    )
                )};
            </>
        </div>
    )
}