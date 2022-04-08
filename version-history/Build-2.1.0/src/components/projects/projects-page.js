import * as React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const items = [
    {
        imagePath: "/projects/portfolio", 
        imageSrc: "../Images/portfolio-thumbnail.jpg",
        heading: "Portfolio Website",
        text: "The portfolio website you are currently viewing.",
        link: "/projects/portfolio"
    },

    {
        imagePath: "/projects/arduino", 
        imageSrc: "../Images/arduino-thumbnail.jpg",
        heading: "Arduino Unity Project",
        text: "An arduino game I made in my first year of University.",
        link: "/projects/arduino"
    },

    {
        imagePath: "/projects/student-survival-store", 
        imageSrc: "../Images/student-survival-store-thumbnail.jpg",
        heading: "Student Survival Store",
        text: "Software as a service group project from my second year of University.",
        link: "/projects/student-survival-store"
    },

    {
        imagePath: "/projects/one-messaging", 
        imageSrc: "../Images/one-messaging-thumbnail.jpg",
        heading: "One messaging project",
        text: "A realtime messaging app I made in my second year of University.",
        link: "/projects/one-messaging"
    },

    {
        imagePath: "/projects/esports-center", 
        imageSrc: "../Images/esports-center-thumbnail.jpg",
        heading: "The Esports Center",
        text: "Statistics tracking group project from my second year of University.",
        link: "/projects/esports-center"
    },

    {
        imagePath: "/projects/game-review", 
        imageSrc: "../Images/game-review-thumbnail.jpg",
        heading: "Game Review",
        text: "Website for reviewing video games",
        link: "/projects/game-review"
    }
];

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects | Josh Haywood | Portfolio</title>
            </Helmet>

            <div className="py-40 md:px-0 md:w-3/4 mx-auto space-y-20">        
                <h1 className="text-center font-semibold underline decoration-primary">Projects</h1>
                    <div className="space-y-10 lg:space-y-0 lg:grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-20"> 
                        {items.map((items) => 
                            <div id="project">
                                <Link to={items.imagePath}>
                                    <img  className="border-2 border-gray-700 rounded-md hover:animate-pop-out" alt="Image of project" src={items.imageSrc}/>
                                </Link>

                                <h5 className="mt-10">{items.heading}</h5>
                                <p className="my-2">{items.text}</p>
                                <Link id="projectLink" className="text-primary" to={items.link}>View Project →</Link>
                            </div>
                        )}
                    </div>
            </div>
        </>
    );
}