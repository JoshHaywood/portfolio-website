import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import Contact from './contact';

export default function ContactPage(props) {
    return (
        <>
            <Helmet>
                <title>Contact | Josh Haywood</title>
            </Helmet>
            
            {/* Form */}
            <motion.div 
                className="h-screen px-10 flex flex-col justify-center max-w-[650px] mx-auto"
                initial= {{ opacity: 0, y: '5%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: props.delay, ease: 'easeInOut' }}
            >
                <Contact />
            </motion.div>
        </>
    );
}