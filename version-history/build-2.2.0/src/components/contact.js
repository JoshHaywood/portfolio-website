import * as React from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Contact() {
    return (
        <> 
            <h1 className="text-center underline font-semibold decoration-primary pb-10 lg:pb-20">Contact</h1>

            <form className="flex flex-col space-y-10" action="https://formsubmit.co/joshhaywood025@gmail.com" method="POST">
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