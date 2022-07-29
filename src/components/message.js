import * as React from 'react';
import Button from '@mui/material/Button';

export default function Message(props) {
    return (
        <div className="flex flex-col text-center justify-center h-screen space-y-10 mx-5">
            <h1 className="text-white text-6xl font-semibold">{props.heading}</h1>

            <h5>{props.message}</h5>

            <a href="https://www.joshhaywood-portfolio.com/">
                <Button
                    onClick={() => {document.documentElement.scrollTop = 0}}

                    sx={{
                            border: '2px solid #4c6bc1',
                            color: 'white',
                            marginLeft: 'auto',
                            marginRight: 'auto',

                            ':hover': {
                                bgcolor: 'rgba(76, 107, 193, 0.3)',
                            },
                        }}
                >
                Go Back
                </Button>
            </a>
        </div>
    );
}