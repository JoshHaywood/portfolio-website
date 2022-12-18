import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <motion.div 
            class="fixed top-0 left-0 bottom-0 right-0 z-50 bg-tertiary"
            initial= {{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 2.5, ease: 'easeInOut' }} 
        >
            {/* Image container */}
            <motion.div 
                class="flex-1 justify-center items-center"
                initial= {{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }} 
            >
                <motion.img 
                    src="../Images/icon.png" 
                    class="h-[80px] absolute left-0 right-0 top-[50%] -translate-y-[50%] px-5 mx-auto"
                    initial= {{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                ></motion.img>

                <motion.img 
                    src="../Images/icon-primary.png" 
                    class="h-[80px] absolute left-0 right-0 top-[50%] -translate-y-[50%] px-5 mx-auto"
                    initial= {{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
                ></motion.img>
            </motion.div>
        </motion.div>
    )
}