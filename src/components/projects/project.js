import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

export default function Project(props) {
    const navigate = useNavigate();

    const features = props.features;
    const structure = props.structure;
    return (
        <>
            <div className="relative flex flex-col justify-center mt-[4.75rem]">
                {/* Background Image */}
                <div className="overflow-hidden"> {/* Container to prevent overflow */}
                    <motion.div
                        initial= {{ scale: 1.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                    >
                        <div id="projectHero" className="absolute bg-primary h-[35vh] sm:h-[40vh] w-screen brightness-[80%] opacity-50 backdrop-blur-sm"></div>
                        <div className="h-[35vh] sm:h-[40vh] w-[screen]" style={{backgroundImage: `url("${props.projectImage}")`}}></div>
                    </motion.div>
                </div>


                {/* Heading */}
                {/* Parent with position to not interfere with inline-block */}
                <motion.div className="absolute text-center left-0 right-0 inline-block px-5"
                    initial= {{ opacity: 0, y: '-50%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
                > 
                    <div className="space-y-3 text-center inline-block p-5 pb-8 rounded-md bg-secondary">
                        <h1 className="inline-block mx-auto shadow-md sm:text-5xl md:text-6xl font-semibold">{props.heading}</h1>
                        <div className="h-1 w-4/5 mx-auto bg-primary"></div>
                    </div>
                </motion.div>
            </div>
            
            <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto py-16 md:py-32 px-5">
                {/* Article */}
                <motion.div className="w-full md:w-4/5 mr-5 order-2 md:order-1 space-y-10"
                    initial= {{ opacity: 0, y: '5%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5, ease: 'easeInOut' }}
                >
                    <p>{props.overview}</p>

                    {/* Features list */}
                    <div className="py-10 md:flex space-y-10 items md:space-y-0 md:space-x-10 border-y-2 border-primary">
                        <div className="space-y-10">
                            <h3 className="font-medium">Features</h3>
                            <ul className="space-y-10">
                                {features.map((features) =>
                                    <li className="list-disc marker:text-primary ml-4 text-2xl">{features}</li>
                                )}
                            </ul>
                        </div>

                        <div className="space-y-10">
                            <h3 className="font-medium">Structure</h3>
                            <ul className="space-y-10">
                                {structure.map((structure) =>
                                    <li className="list-disc marker:text-primary ml-4 text-2xl">{structure}</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Target</h3>
                        <p>{props.target}</p>
                    </div>

                    <img className="mx-auto rounded-sm" src={props.targetImage} alt="Image of project"></img>

                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Issues</h3>
                        <p>{props.issues}</p>
                    </div>

                    <img className="mx-auto rounded-sm" src={props.issuesImage} alt="Image of project"></img>

                    <div className="space-y-3">
                        <h3 className="underline decoration-primary font-semibold">Resolutions</h3>
                        <p>{props.resolutions}</p>
                    </div>
                </motion.div>

                {/* Side menu */}
                <motion.div className="w-full md:w-1/5 mx-auto py-5 md:py-0 relative order-1 md:order-2 md:text-center"
                    initial= {{ opacity: 0, y: '5%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }}
                >
                    <Button
                        onClick={() => navigate(-1)}
                        variant="contained"

                        sx={{
                                color: 'white',
                                backgroundColor: '#4c6bc1',
                                position: { md: 'absolute' },
                                left: '0',
                                right: '0',
                                margin: { md: '0 1.25rem' },

                                ':hover': {
                                    bgcolor: 'rgba(76, 107, 193, 0.75)',
                                },
                            }}
                    >
                    Go Back
                    </Button>

                    <div className="absolute top-0 md:top-[8vh] bottom-0 flex flex-row md:flex-col md:left-0 right-0 items-center space-x-3 md:space-x-0 md:space-y-10">
                        <a href={props.projectLink}>
                            <svg className="h-auto w-8 hover:-translate-y-2 fill-secondary-text hover:fill-secondary-text-hover transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" alt="globe icon" viewBox="0 0 512 512"> {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM266.3 48.25L232.5 73.6C227.2 77.63 224 83.95 224 90.67V99.72C224 106.5 229.5 112 236.3 112C238.7 112 241.1 111.3 243.1 109.9L284.9 82.06C286.9 80.72 289.3 80 291.7 80H292.7C298.9 80 304 85.07 304 91.31C304 94.31 302.8 97.19 300.7 99.31L280.8 119.2C275 124.1 267.9 129.4 260.2 131.9L233.6 140.8C227.9 142.7 224 148.1 224 154.2C224 157.9 222.5 161.5 219.9 164.1L201.9 182.1C195.6 188.4 192 197.1 192 206.1V210.3C192 226.7 205.6 240 221.9 240C232.9 240 243.1 233.8 248 224L252 215.9C254.5 211.1 259.4 208 264.8 208C269.4 208 273.6 210.1 276.3 213.7L292.6 235.5C294.7 238.3 298.1 240 301.7 240C310.1 240 315.6 231.1 311.8 223.6L310.7 221.3C307.1 214.3 310.7 205.8 318.1 203.3L339.3 196.2C346.9 193.7 352 186.6 352 178.6C352 168.3 360.3 160 370.6 160H400C408.8 160 416 167.2 416 176C416 184.8 408.8 192 400 192H379.3C372.1 192 365.1 194.9 360 200L355.3 204.7C353.2 206.8 352 209.7 352 212.7C352 218.9 357.1 224 363.3 224H374.6C380.6 224 386.4 226.4 390.6 230.6L397.2 237.2C398.1 238.1 400 241.4 400 244C400 246.6 398.1 249 397.2 250.8L389.7 258.3C386 261.1 384 266.9 384 272C384 277.1 386 282 389.7 285.7L408 304C418.2 314.2 432.1 320 446.6 320H453.1C460.5 299.8 464 278.3 464 256C464 144.6 376.4 53.64 266.3 48.25V48.25zM438.4 356.1C434.7 353.5 430.2 352 425.4 352C419.4 352 413.6 349.6 409.4 345.4L395.1 331.1C388.3 324.3 377.9 320 367.1 320C357.4 320 347.9 316.5 340.5 310.2L313.1 287.4C302.4 277.5 287.6 271.1 272.3 271.1H251.4C238.7 271.1 226.4 275.7 215.9 282.7L188.5 301C170.7 312.9 160 332.9 160 354.3V357.5C160 374.5 166.7 390.7 178.7 402.7L194.7 418.7C203.2 427.2 214.7 432 226.7 432H248C261.3 432 272 442.7 272 456C272 458.5 272.4 461 273.1 463.3C344.5 457.5 405.6 415.7 438.4 356.1L438.4 356.1zM164.7 100.7L132.7 132.7C126.4 138.9 126.4 149.1 132.7 155.3C138.9 161.6 149.1 161.6 155.3 155.3L187.3 123.3C193.6 117.1 193.6 106.9 187.3 100.7C181.1 94.44 170.9 94.44 164.7 100.7V100.7z"/>
                            </svg>
                        </a>
                        <a href={props.repoLink}>
                            <svg className="h-auto w-8 hover:-translate-y-2 text-secondary-text hover:text-secondary-text-hover transition duration-300 ease-in-out" alt="Github logo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" classname="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>                    
                        </a>
                    </div>

                    <div className="invisible md:visible w-1 h-full mx-auto bg-quaternary"></div>
                </motion.div>
            </div>
        </>
    );
}