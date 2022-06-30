import * as React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Slider from "./slider";

const items = [
    {
        imagePath: "/projects/portfolio", 
        imageSrc: "../Images/portfolio-thumbnail.jpg",
        heading: "Portfolio Website",
        textFirst: "My website showcasing projects i've created as well as a hub for marketing and contact.",
        textSecond: "Specifically, my first version of the portfolio site and how ive adapted the project since then.",
        link: "/projects/portfolio"
    },

    {
        imagePath: "/projects/arduino", 
        imageSrc: "../Images/arduino-thumbnail.jpg",
        heading: "Arduino Unity Project",
        textFirst: "An arduino game and controller I made in my first year of University.",
        textSecond: "This was my introduction into how psychical components can interact with game engines",
        link: "/projects/arduino"
    },

    {
        imagePath: "/projects/student-survival-store", 
        imageSrc: "../Images/student-survival-store-thumbnail.jpg",
        heading: "Student Survival Store",
        textFirst: "Software as a service group project from my second year of University.",
        textSecond: "A group project based around a monthly subscription based product service.",
        link: "/projects/student-survival-store"
    },

    {
        imagePath: "/projects/one-messaging", 
        imageSrc: "../Images/one-messaging-thumbnail.jpg",
        heading: "One Messaging Project",
        textFirst: "A realtime messaging app I made in my second year of University.",
        textSecond : "This was project portion of my research into the advancement web communication systems.",
        link: "/projects/one-messaging"
    },

    {
        imagePath: "/projects/esports-center", 
        imageSrc: "../Images/esports-center-thumbnail.jpg",
        heading: "The Esports Center",
        textFirst: "Statistics tracking group project from my second year of University.",
        textSecond: "A project I lead as project leader, looking into the rise of Esports.",
        link: "/projects/esports-center"
    },

    {
        imagePath: "/projects/game-review", 
        imageSrc: "../Images/game-review-thumbnail.jpg",
        heading: "Game Review",
        textFirst: "Website for reviewing video games",
        textSecond: "Targeted at improving my knowledge in functional based React and web design",
        link: "/projects/game-review"
    }
];

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects | Josh Haywood</title>
            </Helmet>
            
            <div className="pt-44 pb-16 md:pb-48 md:px-0 md:w-2/3 mx-5 md:mx-auto space-y-12">        
                {/* Heading */}
                <div className="space-y-3 mx-auto">
                    <h2 className="font-semibold text-center">Projects</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <Slider />

                <div id="projectCardContainer" className="space-y-16 lg:space-y-0 lg:grid grid-rows-2 grid-cols-3 gap-x-10 gap-y-14"> 
                    {items.map((items) => 
                        //Project card
                        <div className="shadow-md shadow-[rgba(76,107,193,0.2)] rounded-md">
                            <div className="bg-quaternary rounded-md rounded-b-none">
                                {/* Image */}
                                <Link to={items.imagePath}>
                                    <div className="overflow-hidden"> {/* Prevents scale animation overlapping container */}
                                        <img className="rounded-md p-3 pb-0" alt="Image of project" src={items.imageSrc}/>
                                    </div>
                                </Link>

                                {/* Text */}
                                <div className="mx-3 mt-3 pb-4 mb-1 space-y-3 md:h-[215px] flex flex-col justify-center"> {/* Specific height to keep cards same dimesions */}
                                    <h5 className="font-semibold text-gray-300">{items.heading}</h5>
                                    <p className="text-gray-400">{items.textFirst}</p>
                                    <p className="text-gray-400">{items.textSecond}</p>
                                </div>
                            </div>
                            
                            {/* Button */}
                            <div className="bg-quaternary text-center rounded-md rounded-t-none p-3">
                                <Link className="text-primary-text hover:text-secondary-text" to={items.link}>View Project →</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}