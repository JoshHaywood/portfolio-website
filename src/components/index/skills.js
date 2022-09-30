import React from 'react';

export default function Skills() {
    {/* SVG Attributions: 
            https://fontawesome.com/icons/code?s=solid&f=classic 
            https://fontawesome.com/icons/pen-nib?s=solid&f=classic
    */}
    const items = [
        {
            path: 'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
            heading: 'Full-stack Development',
            text: 'I have experience in both front-end and back-end development. I have worked with a variety of languages and frameworks, including React, Node.js, Express, and MongoDB.',
        },
        {
            path: 'M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z',
            heading: 'Web Design',
            text: 'I have experience in designing and developing websites. I have worked with a variety of tools, including Adobe Photoshop, Adobe Illustrator, and Figma.',
        },
        {
            path: 'M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z',
            heading: 'Version Control',
            text: 'I have experience in using version control systems, such as Git and GitHub. I have also worked with a variety of Dev-ops tools, including Docker and Jenkins.',
        },
    ];

    return (
        <div>
            {/* Heading */}
            <div className="space-y-3 mx-auto">
                <h1 className="font-semibold text-4xl text-center">Skills</h1>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Cards */}
            <div className="inline-flex flex-row w-full mt-[4rem] space-x-5">
                {items.map((items, index) => index != 1 && (
                    <div className="w-[350px] h-min bg-tertiary border-b-2 border-primary space-y-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-24 w-24 my-5 mx-auto fill-white">
                            <path d={items.path}/>
                        </svg>
                        
                        <h1 className="px-5 text-2xl">{items.heading}</h1>
                        <p className="px-5 pb-10">{items.text}</p>
                    </div>  
                ))}

                {items.map((items, index) => index === 1 && (
                    <div className="w-[350px] h-min bg-tertiary border-b-2 border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-28 w-28 mt-5 mb-1 pl-5 mx-auto fill-white">
                            <path d={items.path}/>
                        </svg>
                        
                        <h1 className="px-5 text-2xl">{items.heading}</h1>
                        <p className="px-5 pt-2 pb-10">{items.text}</p>
                    </div>  
                ))}


            </div>
        </div>
    );
};