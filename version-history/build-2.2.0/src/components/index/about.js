import  * as React from 'react';

const items = [
    {text: "HTML - 3 years experience"},
    {text: "CSS - 3 years experience"},
    {text: "Client side JavaScript - 2 years experience"},
    {text: "Handlebars - 6 months experience"},
    {text: "Node.js  - 6 months experience"},
    {text: "Express.js  - 6 months experience"},
    {text: "C#.net and Unity C# - 18 months experience"},
    {text: "C++ - 18 months experience"},
    {text: "Unity - 18 months experience"},
];

export default function About() {
    return (
        <div className="md:space-x-10 space-y-10 md:space-y-0 md:flex"> 
            <div className="space-y-5 md:w-1/3"> 
                <h1 className="underline decoration-primary font-semibold text-center">About me</h1>
                <p>I’m a student from Devon, currently enrolled at Falmouth University, in my second year of a Web Development BSC.
                    My interest for Web Development came from my educational background.
                    Having studied Information Technologies at GCSE and later completed a level 3 BTEC diploma in computing software.
                    During the diploma I studied web fundamentals such as: HTML, CSS and JavaScript and became keen to study these languages more.
                    I therefore pursued an honours degree in Web Development.</p>
            </div>
            
            <div className="space-y-5 md:w-1/3"> 
                <h1 className="underline decoration-primary font-semibold text-center">Skills</h1>
                <p>My primary skills include but are not limited to:
                    A range of software, frameworks and programming languages areas including:<br />
                </p>
                <ul>
                    Front-end web development:
                    {/* Maps first three objects */}
                    {items.map((items, index) => 
                        index < 3 && (
                            <li className="list-disc marker:text-primary ml-4">{items.text}</li>
                        )
                    )}
                </ul>
                <ul>
                    Back-end web development:
                    {/* Maps objects between third and sixth */}
                    {items.map((items, index) => 
                        index >= 3 && index < 6 && (
                            <li className="list-disc marker:text-primary ml-4">{items.text}</li>
                        )
                    )}
                </ul>
                <ul>
                    .Net and Games programming:
                    {/* Maps final three objects */}
                    {items.map((items, index) => 
                        index >= 6 && (
                            <li className="list-disc marker:text-primary ml-4">{items.text}</li>
                        )
                    )}
                </ul>
            </div>
            
            <div className="space-y-5 md:w-1/3"> 
                <h1 className="underline decoration-primary font-semibold text-center">Interest</h1>
                <p>The web related languages and frameworks listed previously are my current main interests.
                    With CSS, React and Express.js being my main focus.
                    I’m trying to improve my page styling and improving my skills in back end development.
                    Expanding my knowledge with JSON objects and variable parsing across ends.
                    Aside with this im always trying to learn new frameworks and libraries im currently learning React, Material UI and Socket.io.
                </p>
            </div>
        </div>
    );
}