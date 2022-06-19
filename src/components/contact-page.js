import * as React from 'react';
import Contact from './contact';
import { Helmet } from "react-helmet";

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact | Josh Haywood</title>
            </Helmet>
            
            {/* Form */}
            <div className="h-screen px-10 flex flex-col justify-center md:w-2/4 lg:w-2/5 mx-auto">
                <Contact />
            </div>
        </>
    );
}