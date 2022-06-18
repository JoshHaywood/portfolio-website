import * as React from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Contact() {
    //Animation scroll event
    window.addEventListener('scroll', function() {
        let triggerElement = document.getElementById("contactHeading"); //Element used as trigger
        let bounding = triggerElement.getBoundingClientRect();

        let targetedElement = document.getElementById("contactForm"); //Element animation is applied too

        // Gets boundaries using getBoundingClientRect
        // If in viewport
        if (bounding.top >= 0 &&
            bounding.left >= 0 &&
            //Compares to element dimensions
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

            targetedElement.classList.add('fade-in-up');
        };
    });

    return (
        <> 
            {/* Heading */}
            <div className="pb-12 pt-4 md:pt-0 mx-auto"> 
                <h2 id="contactHeading" className="font-semibold text-center">Contact</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <form id="contactForm" className="flex flex-col space-y-10" action="https://formsubmit.co/joshhaywood025@gmail.com" method="POST">
                <TextField 
                    className="bg-quaternary rounded-md" 
                    InputProps={{ sx: { color: "white" } }} 
                    InputLabelProps={{ sx: { color: "white" } }} 
                    sx={{ borderBottom: '1px solid #4c6bc1' }} 
                    type="name" 
                    name="name" 
                    label="Enter your name:" 
                    required 
                />
                <TextField 
                    className="bg-quaternary rounded-md" 
                    InputProps={{ sx: { color: "white" } }}
                    InputLabelProps={{ sx: { color: "white" } }} 
                    sx={{ borderBottom: '1px solid #4c6bc1' }} 
                    type="email" name="email" 
                    label="Enter your email:" 
                    required 
                /> 
                <TextField 
                    className="bg-quaternary rounded-md" 
                    InputProps={{ sx: { color: "white" } }}
                    InputLabelProps={{ sx: { color: "white" } }} 
                    sx={{ borderBottom: '1px solid #4c6bc1' }} 
                    type="text" 
                    name="text"  
                    label="Enter your message:" 
                    required 
                    multiline 
                    rows={8} 
                />
                
                <input type="hidden"  name="_next" defaultValue="https://www.joshhaywood-portfolio.com/message-sent"/>
                <Button
                    sx={{
                            borderBottom: '2px solid #4c6bc1',
                            width: '25%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            backgroundColor: '#181a1d',
                            color: 'white',

                            ':hover': {
                                bgcolor: 'rgba(24, 26, 29, 0.5)', 
                            },
                        }}
                >
                Submit
                </Button>
            </form>
        </>
    );
}