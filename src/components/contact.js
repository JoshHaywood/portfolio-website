import * as React from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <> 
            {/* Heading */}
            <div className="pb-12 md:pb-14 pt-4 md:pt-0 space-y-3 mx-auto"> 
                <h2 className="font-semibold text-center">Contact</h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <motion.form className="flex flex-col space-y-10" action="https://formsubmit.co/joshhaywood025@gmail.com" method="POST"
                initial= {{ opacity: 0, y: '5%' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
            >
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
            </motion.form>
        </>
    );
}