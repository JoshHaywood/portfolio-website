import * as React from 'react';
import Contact from './contact';
import { Helmet } from "react-helmet";

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact | Josh Haywood | Portfolio</title>
            </Helmet>
            
            {/* Background */}
            <div className="w-full h-screen bg-contact-background bg-no-repeat bg-cover bg-center">
                {/* Form */}
                <div className="h-screen px-10 flex flex-col justify-center md:w-2/4 lg:w-2/5 mx-auto">
                    <Contact />
                </div>
            </div>
        </>
    );
}