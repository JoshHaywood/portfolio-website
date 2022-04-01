import * as React from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        imagePath: "/projects/portfolio", 
        imageSrc: "../Images/portfolio-thumbnail.jpg",
        heading: "Portfolio Website",
        text: "The portfolio website you are currently viewing.",
        link: "/projects/portfolio"
    },

    {
        imagePath: "/projects/one-messaging", 
        imageSrc: "../Images/one-messaging-thumbnail.jpg",
        heading: "One messaging project",
        text: "A realtime messaging app I made in my second year of University",
        link: "/projects/one-messaging"
    },
];

export default function Projects() {
    return (
        <div className="md:w-3/4 mx-auto pt-8 md:pt-16 xl:pt-36 pb-12 md:pb-20 xl:pb-44 space-y-10"> 
            <h1 className="text-center underline decoration-primary font-semibold">Featured Projects</h1>
            
            <div className="space-y-10 xl:space-y-0 xl:pt-10 xl:space-x-10 xl:flex"> 
                {items.map((items) => (
                    <div>
                        <Link to={items.imagePath}>
                            <img className="hover:animate-pop-out" alt="Image of project" src={items.imageSrc}/>
                        </Link>

                        <h5 className="mt-10 font-medium">{items.heading}</h5>
                        <p className="my-2">{items.text}</p>
                        <Link className="text-primary hover:underline decoration-primary" to={items.link}>View Project →</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}