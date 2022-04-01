import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Message(props) {
    return (
        <div className="flex flex-col text-center justify-center h-screen space-y-8 pb-20">
            <h1 className="text-white text-6xl">{props.heading}</h1>

            <h5>{props.message}</h5>

            <Link to="/"><button className="bg-primary py-2 px-3.5 rounded-md text-white hover:bg-primary-hover">Go back to Home</button></Link>
        </div>
    );
}