import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
    //Sets target path as location
    const { pathname } = useLocation()

    useEffect(() => {
        /* setTimeout ensures this runs after all other components to prevent errors */
        setTimeout(() => {
            //Scrolls to top
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])

    return null
}