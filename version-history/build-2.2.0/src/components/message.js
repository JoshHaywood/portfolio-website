import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Message(props) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col text-center justify-center h-screen space-y-8 pb-20">
            <h1 className="text-white text-6xl">{props.heading}</h1>

            <h5>{props.message}</h5>

            <Button
                    onClick={() => navigate(-1)}
                    sx={{
                            backgroundColor: '#597de0',
                            color: 'white',
                            width: '10%',
                            marginLeft: 'auto',
                            marginRight: 'auto',

                            ':hover': {
                                bgcolor: 'rgba(76, 107, 193, 0.75)', 
                            },
                        }}
                >
                Go Back
            </Button>
        </div>
    );
}