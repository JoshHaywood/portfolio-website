import * as React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const items = [
    {
        imagePath: "/portfolio-project", 
        imageSrc: "../Images/portfolio-thumbnail.jpg",
        heading: "Portfolio Website",
        text: "The portfolio website you are currently viewing.",
        link: "/portfolio-project"
    },

    {
        imagePath: "/arduino-project", 
        imageSrc: "../Images/arduino-thumbnail.jpg",
        heading: "Arduino Unity Project",
        text: "An arduino game I made in my first year of University.",
        link: "/arduino-project"
    },

    {
        imagePath: "/student-survival-store-project", 
        imageSrc: "../Images/student-survival-store-thumbnail.jpg",
        heading: "Student Survival Store",
        text: "Software as a service group project from my second year of University.",
        link: "/student-survival-store-project"
    },

    {
        imagePath: "/one-messaging", 
        imageSrc: "../Images/one-messaging-thumbnail.jpg",
        heading: "One messaging project",
        text: "A realtime messaging app I made in my second year of University.",
        link: "/one-messaging"
    },

    {
        imagePath: "/esports-center-project", 
        imageSrc: "../Images/esports-center-thumbnail.jpg",
        heading: "The Esports Center",
        text: "Statistics tracking group project from my second year of University.",
        link: "/esports-center-project"
    },

    {
        imagePath: "/game-review-project", 
        imageSrc: "../Images/game-review-thumbnail.jpg",
        heading: "Game Review",
        text: "Website for reviewing video games",
        link: "/game-review-project"
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
                            <div>
                                <Link to={items.imagePath}>
                                    <img className="border-2 border-gray-700 rounded-md" alt="Image of project" src={items.imageSrc}/>
                                </Link>

                                <h5 className="mt-10">{items.heading}</h5>
                                <p className="my-2">{items.text}</p>
                                <Link className="text-primary hover:underline decoration-primary" to={items.link}>View Project →</Link>
                            </div>
                        )}
                    </div>
            </div>
        </>
    );
}