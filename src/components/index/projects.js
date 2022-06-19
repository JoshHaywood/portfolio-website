import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    const items = [
        {
            id: "projectOne",
            imageSrc: "../Images/portfolio-thumbnail.jpg",
            tagline: "Personal Site",
            heading: "Portfolio Website",
            text: "My website showcasing projects ive created as well as a hub for marketing and contact. Specifically my first version of the portfolio site.",
            link: "/projects/portfolio",
            list: "Handlebars ExpressJS CSS",
        },
    
        {
            id: "projectTwo",
            imageSrc: "../Images/one-messaging-thumbnail.jpg",
            tagline: "Messaging Project",
            heading: "One messaging project",
            text: "A realtime messaging app I made in my second year of University. The project portion of my research into web communication systems.",
            link: "/projects/one-messaging",
            list: "Handlebars ExpressJS SocketIO SQLite",
        },
    ];  
    
    const technologies = [];
    const listItems = technologies.map((technologies) =>
      <li className="text-gray-400">{technologies}</li>
    );

    //Animation scroll event
    window.addEventListener('scroll', function() {
        for (let i = 0; i < items.length; i++) { //Ensures all mapped elements have animation applied
            let triggerElement = document.getElementById("projectsHeading"); //Element used as trigger
            let bounding = triggerElement.getBoundingClientRect();

            let targetedElement = document.getElementById(items[i].id); //Element animation is applied too

            // Gets boundaries using getBoundingClientRect
            // If in viewport
            if (bounding.top >= 0 &&
                bounding.left >= 0 &&
                //Compares to element dimensions
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

                targetedElement.classList.add('fade-in-up');
            };
        };
    });

    return (
        <div className="md:w-4/5 xl:w-3/5 mx-auto pt-20 md:pt-16 xl:pt-36 pb-12 md:pb-20 xl:pb-40"> 
            {/* Heading */}
            <div className="space-y-3 mx-auto"> 
                <h2 id="projectsHeading" className="font-semibold text-center">Featured Projects</h2>
                <div className="w-48 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Project section */}
            <>
                {items.map((items, index) => 
                    index == 0 && (
                        <Link to={items.link}>
                            <div id={items.id} className="mt-12 md:space-x-10 flex md:flex-row items-center text-left md:text-right"> {/* Objects mapped ID used so all mapped elements have scroll listener applied */}
                                {/* Image */}
                                    <div className="relative w-full md:w-3/5 overflow-hidden"> {/* Container for overlaying child elements */}
                                        <div className="hover:animate-pop-out">  {/* Animation added as child so parent elements scale isnt effected */}
                                            <div className="absolute bg-primary w-full h-full z-10 brightness-[20%] md:brightness-100 opacity-90 md:opacity-30 md:hover:opacity-0 transition duration-300 ease-in-out"></div>
                                            <img className="rounded-sm h-[35vh] md:h-full w-min" alt="Image of feature project" src={items.imageSrc}></img>
                                        </div>
                                    </div>

                                    {/* Text card */}
                                    <div className="flex flex-col items-start md:items-end z-20 sm:pr-20 md:pr-0 md:w-2/5 mx-[0.7rem] sm:mx-10 pb-5 sm:pb-0 absolute md:static">
                                        <h6 className="text-primary">{items.tagline}</h6>
                                        <h4 className="mb-5">{items.heading}</h4>

                                        <p className="bg-none md:bg-senary md:pl-10 pr-5 sm:pt-5 pb-5 md:-ml-32 shadow-md hover:shadow-lg rounded-sm text-gray-300">
                                            {items.text}
                                        </p>

                                        {/* Stack list */}
                                        <ul id="projectList" className="flex flex-row sm:pt-5">
                                            <li>{items.list}</li>
                                        </ul>

                                        <a href="https://github.com/El-Goblino/" className="h-5 w-5 pt-5 hover:text-primary transition duration-300 ease-in-out">
                                            <svg alt="Github logo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" classname="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                            </svg>
                                        </a>
                                    </div>
                                
                            </div>
                        </Link>
                    )
                )};
                    
                {items.map((items, index) => 
                    index == 1 && (
                        <Link to={items.link}>
                            <div id={items.id} className="mt-8 lg:mt-20 md:space-x-10 flex md:flex-row items-center"> {/* Objects mapped ID used so all mapped elements have scroll listener applied */}
                                {/* Text card */}
                                <div className="flex flex-col items-start z-20 sm:pr-20 md:pr-0 md:w-2/5 mx-[0.7rem] sm:mx-10 md:mx-0 pb-5 sm:pb-0 absolute md:static">
                                    <h6 className="text-primary">{items.tagline}</h6>
                                    <h4 className="mb-5">{items.heading}</h4>

                                    <p className="bg-none md:bg-senary text-left md:pl-5 pr-10 sm:pt-5 pb-5 md:-mr-32 shadow-md hover:shadow-lg rounded-sm text-gray-300">
                                        {items.text}
                                    </p>

                                    {/* Stack list */}
                                    <ul id="projectList" className="flex flex-row sm:pt-5">
                                        <li>{items.list}</li>
                                    </ul>

                                    <a href="https://github.com/El-Goblino/" className="h-5 w-5 pt-5 hover:text-primary transition duration-300 ease-in-out">
                                        <svg alt="Github logo" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" classname="svg-inline--fa fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */} 
                                            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                        </svg>
                                    </a>
                                </div>

                                {/* Image */}
                                <div className="relative w-full md:w-3/5 overflow-hidden"> {/* Container for overlaying child elements */}
                                    <div className="hover:animate-pop-out">  {/* Animation added as child so parent elements scale isnt effected */}
                                        <div className="absolute bg-primary w-full h-full z-10 brightness-[20%] md:brightness-100 opacity-90 md:opacity-30 md:hover:opacity-0 transition duration-300 ease-in-out"></div>
                                        <img className="rounded-sm h-[35vh] md:h-full w-min" alt="Image of feature project" src={items.imageSrc}></img>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                    )
                )};
            </>
        </div>
    );
}