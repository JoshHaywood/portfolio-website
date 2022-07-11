import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from "gsap";

export default function LoadingScreen() {
    useEffect(() => {
        gsap.to('#icon', {duration: 1.5, opacity: 0, delay: '2'})
        gsap.to('#iconPrimary', {duration: 1.5, opacity: 100, delay: '2'})

        gsap.from('#logoText', {duration: 1.5, x: '-5%', opacity: 0, ease: 'power4', delay: '2'})

        gsap.from('#icon', {duration: 1, x: '150%', delay: "1", ease: 'power1'})
    })

    return(
        <div className="flex items-center h-screen w-screen transition duration-300 ease-in-out">
            <div className="mx-auto flex items-center space-x-5">
                <div className="items-center z-10">
                    <img id="icon" src="../Images/icon.png" className="h-[70px] sm:h-[80px]"></img>
                    <img id="iconPrimary" src="../Images/icon-primary.png" className="h-[70px] sm:h-[80px] -mt-[4.3rem] sm:-mt-[5rem] opacity-0"></img>
                </div>
                
                
                <img id="logoText" src="../Images/logo-text.png" className="h-[60px] sm:h-[70px]"></img>
            </div>
        </div>
    )
};