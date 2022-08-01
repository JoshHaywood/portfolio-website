import  * as React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const items = [
        {text: "HTML - 3 years"},
        {text: "CSS - 3 years"},
        {text: "Client side JavaScript - 6 months"},
        {text: "Handlebars - 6 months"},
        {text: "Node.js  - 6 months"},
        {text: "Express.js  - 6 months"},
        {text: "C#.net and Unity C# - 18 months"},
        {text: "C++ - 18 months"},
        {text: "Unity - 18 months"},
    ];

    return (
        //Animation
        <motion.div 
            className="space-y-12 px-5 sm:px-10 max-w-[1000px] mx-auto" 
            initial= {{ opacity: 0, y: '5%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
        >
            {/* Heading */}
            <div className="space-y-3 mx-auto">
                <h2 className="font-semibold text-center">About Me</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Text */}
            <div className=" flex flex-col md:flex-row md:justify-evenly items-center md:items-start md:space-x-10 pb-10 sm:pb-0"> 
                <div className="flex flex-col space-y-4 w-100% md:w-3/5 leading-7">
                    <p>
                        I’m a student from Devon, England. 
                        Currently studying a BSC in Web Development.
                        My interest for Web Development came from my educational background.
                        Studying Information Technologies and later Computer Software. 
                    </p>

                    <p>
                        My main interests are in front-end or user interface development and design. 
                        Recently I've been focused on learning React, Material UI and marketing myself using online tools like this portfolio site.
                    </p>

                    <h6 className="text-gray-400">Technologies I have experience using:</h6>
                    <div className="flex justify-between">
                        <ul>
                            {/* Maps first three objects */}
                            {items.map((items, index) => 
                                index < 3 && (
                                    <li className="list-disc marker:text-primary ml-4 text-sm">{items.text}</li>
                                )
                            )}
                        </ul>
                        <ul>
                            {/* Maps objects between third and sixth */}
                            {items.map((items, index) => 
                                index >= 3 && index < 6 && (
                                    <li className="list-disc marker:text-primary ml-4 text-sm">{items.text}</li>
                                )
                            )}
                        </ul>
                        <ul>
                            {/* Maps final three objects */}
                            {items.map((items, index) => 
                                index >= 6 && (
                                    <li className="list-disc marker:text-primary ml-4 text-sm">{items.text}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                {/* Image */}
                <div id="hero-image" className="max-w-[200px] sm:max-w-[300px] mt-16 md:mt-0 border-2 border-primary rounded-md h-min relative mx-auto md:top-5 left-5"> {/* Creates border behind image */}
                    <img src="../Images/portrait.webp" alt="developer portrait" className="rounded-md relative bottom-5 right-5"></img>
                </div>
            </div>
        </motion.div>
    );
}