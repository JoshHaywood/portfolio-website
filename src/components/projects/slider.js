import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Button from '@mui/material/Button';

import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        slide: '../Images/portfolio-thumbnail.webp',
        heading: 'Portfolio Website', 
        text: `My website showcasing projects i've created as well as a hub for marketing and contact. Specifically, my first version of the portfolio site and how ive adapted the project since then.`, 
        path: '/projects/portfolio',
        link: '/projects/portfolio'
    },

    {
        slide: '../Images/one-messaging-thumbnail.webp', 
        heading: 'One Messaging', 
        text: 'A realtime messaging app I made in my second year of University. This was project portion of my research into the advancement web communication systems.',
        path: '/projects/one-messaging',
        link: '/projects/one-messaging'
    },

    {
        slide: '../Images/student-survival-store-thumbnail.webp', 
        heading: 'Student Survival Store', 
        text: 'Software as a service group project from my second year of University. A group project based around a monthly subscription based product service.',
        path: '/projects/student-survival-store',
        link: '/projects/student-survival-store'
    }
];

const properties = {
    duration: 3000,
    pauseOnHover: true,
    infinite: true,
    canSwipe: true,

    prevArrow: <div class="w-[10px] md:w-[20px] -mr-[10px] sm:mr-[5px] z-50" role="button" aria-label="Previous arrow"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="white"> {/* Attribution: https://fontawesome.com/icons/angle-left?s=solid */}
                        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
                    </svg>
                </div>,

    nextArrow: <div class="w-[10px] md:w-[20px] -ml-[10px] sm:ml-[5px] z-50" role="button" aria-label="Next arrow"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="white"> {/* Attribution: https://fontawesome.com/icons/angle-right?s=solid */}
                        <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                    </svg>
                </div>

};

export default function App() {
    return (
        <div class="max-w-[900px] mx-auto">
            <Slide {...properties} easing="ease" class="hidden sm:block">
                    {slideImages.map((items, index) => {
                        return (
                            //Individual slide
                            <Link class="relative text-center" to={items.path} id="slide" aria-hidden="false">
                                <img class="brightness-[40%]" src={items.slide} alt="Image of project in slideshow"></img>
                                <div class="absolute opacity-20 brightness-[40%] bg-primary left-0 right-0 top-0 bottom-0 z-10"></div> {/* Image overlay to avoid using background images */}

                                {/* Overlay text */}
                                <div class="absolute z-20 top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center w-3/4 mx-auto space-y-5">
                                    <h2 class="font-semibold text-2xl">{items.heading}</h2>
                                    <p>{items.text}</p>
                                    <Link to={items.link}>
                                        <Button
                                            sx={{
                                                border: '2px solid #181a1d', /* To match dimensions of other button without affecting padding */
                                                backgroundColor: '#181a1d',
                                                color: 'white',
                                                width: '8rem',

                                                ':hover': {
                                                    bgcolor: '#181a1d', 
                                                },
                                            }}
                                        >
                                        View Project
                                        </Button>   
                                    </Link>
                                </div>
                            </Link>
                        );
                    })}
            </Slide>
        </div>
    )
}
