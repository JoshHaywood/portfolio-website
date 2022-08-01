import * as React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    //Sets view height as inner height for mobile browsers
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    return(
        <motion.div 
            id="fullscreenElement"
            className="fixed z-50 w-full bg-tertiary"
            initial= {{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 2.5, ease: 'easeInOut' }} 
        >
            {/* Image container */}
            <motion.div 
                className="flex justify-center items-center"
                initial= {{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }} 
            >
                <motion.img 
                    src="../Images/icon.png" 
                    className="h-[80px] absolute left-0 right-0 top-[50%] -translate-y-[50%] px-5 mx-auto"
                    initial= {{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                ></motion.img>

                <motion.img 
                    src="../Images/icon-primary.png" 
                    className="h-[80px] absolute left-0 right-0 top-[50%] -translate-y-[50%] px-5 mx-auto"
                    initial= {{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
                ></motion.img>
            </motion.div>
        </motion.div>
    )
};