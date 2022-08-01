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
            <div className="py-48 bg-quinary w-screen">
                <Contact />
            </div>
        </>
    );
}