import * as React from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        id: "projectOne",
        imagePath: "/projects/portfolio", 
        imageSrc: "../Images/portfolio-thumbnail.jpg",
        heading: "Portfolio Website",
        text: "The portfolio website you are currently viewing.",
        link: "/projects/portfolio"
    },

    {
        id: "projectTwo",
        imagePath: "/projects/one-messaging", 
        imageSrc: "../Images/one-messaging-thumbnail.jpg",
        heading: "One messaging project",
        text: "A realtime messaging app I made in my second year of University",
        link: "/projects/one-messaging"
    },
];  

export default function Projects() {
    window.addEventListener('scroll', function() {; 
        //For each item
        for (let i = 0; i < items.length; i++) {
            //let item = items[i];
            let element = document.getElementById(items[i].id); //Ensure each element has an id assigned
            let bounding = element.getBoundingClientRect();

            // Gets boundaries using getBoundingClientRect
            // If in viewport
            if (bounding.top >= 0 &&
                bounding.left >= 0 &&
                //Compares to element dimensions
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

                element.classList.add('fade-in-up');
            };
        };
    });

    return (
        <div className="md:w-3/4 mx-auto pt-8 md:pt-16 xl:pt-36 pb-12 md:pb-20 xl:pb-44 space-y-10"> 
            <h1 className="text-center font-semibold underline decoration-primary">Featured Projects</h1>
            
            <div className="space-y-10 xl:space-y-0 xl:pt-10 xl:space-x-10 xl:flex"> 
                {items.map((items) => (
                    <div id={items.id} className="opacity-0">
                        <Link to={items.imagePath}>
                            <div className="overflow-hidden">
                                <img className="hover:animate-pop-out" alt="Image of project" src={items.imageSrc}/>
                            </div>
                        </Link>

                        <h5 className="mt-10 font-medium">{items.heading}</h5>
                        <p className="my-2">{items.text}</p>
                        <Link id="projectLink" className="text-primary" to={items.link}>View Project →</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}