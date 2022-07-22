import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    const items = [
        {
            id: "projectOne",
            imageSrc: "../Images/portfolio-thumbnail.jpg",
            tagline: "Personal Site",
            heading: "Portfolio Website",
            text: "My website showcasing projects i've created as well as a hub for marketing and contact. Specifically, my first version of the portfolio site and how ive adapted the project since then.",
            link: "/projects/portfolio",
            list: "Handlebars/React ExpressJS CSS/Tailwind",
        },
    
        {
            id: "projectTwo",
            imageSrc: "../Images/one-messaging-thumbnail.jpg",
            tagline: "Messaging Project",
            heading: "One messaging project",
            text: "A realtime messaging app I made in my second year of University. This was project portion of my research into the advancement web communication systems.",
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
                                    <div className="flex flex-col items-start md:items-end z-20 sm:pr-20 md:pr-0 md:w-2/5 mx-[0.7rem] sm:mx-10 pb-5 absolute md:static">
                                        <h6 className="text-primary">{items.tagline}</h6>
                                        <h4 className="mb-5 font-semibold text-primary-text">{items.heading}</h4>

                                        <p className="bg-none md:bg-senary md:pl-10 pr-5 sm:pt-5 pb-5 md:-ml-32 shadow-md hover:shadow-lg rounded-sm text-gray-300">
                                            {items.text}
                                        </p>

                                        {/* Stack list */}
                                        <ul id="projectList" className="flex flex-row sm:pt-5">
                                            <li>{items.list}</li>
                                        </ul>
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
                                <div className="flex flex-col items-start z-20 sm:pr-20 md:pr-0 md:w-2/5 mx-[0.7rem] sm:mx-10 md:mx-0 pb-5 absolute md:static">
                                    <h6 className="text-primary">{items.tagline}</h6>
                                    <h4 className="mb-5 font-semibold text-primary-text">{items.heading}</h4>

                                    <p className="bg-none md:bg-senary text-left md:pl-5 pr-10 sm:pt-5 pb-5 md:-mr-32 shadow-md hover:shadow-lg rounded-sm text-gray-300">
                                        {items.text}
                                    </p>

                                    {/* Stack list */}
                                    <ul id="projectList" className="flex flex-row sm:pt-5">
                                        <li>{items.list}</li>
                                    </ul>
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