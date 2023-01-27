import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

export default function Message(props) {
  const navigate = useNavigate();

  return (
    <div id="message" class="h-screen flex flex-col text-center justify-center space-y-10 px-5 sm:px-0">
      {/* Heading and message */}
      <h1 class="text-6xl font-semibold text-white">{props.heading}</h1>
      <h2 class="text-xl text-gray-400">{props.message}</h2>

      {/* Return button */}
      <Button
        onClick={() => {
          navigate(props.redirect);
          document.documentElement.scrollTop = 0;
        }}
        sx={{
          border: "2px solid #f2584c",
          color: "white",
          marginLeft: "auto",
          marginRight: "auto",
          textTransform: "none",

          ":hover": {
            bgcolor: "rgba(242, 88, 76, 0.3)",
          },
        }}
      >
        Go Back
      </Button>
    </div>
  );
};