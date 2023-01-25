import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

export default function Message(props) {
  const navigate = useNavigate();

  return (
    <div class="flex flex-col text-center justify-center h-screen space-y-10 mx-5">
      {/* Heading and message */}
      <h1 class="text-white text-6xl font-semibold">{props.heading}</h1>
      <h2 class="text-xl text-gray-400">{props.message}</h2>

      {/* Return button */}
      <Button
        onClick={() => {
          navigate(props.redirect);
          document.documentElement.scrollTop = 0;
        }}
        sx={{
          border: "2px solid #4c6bc1",
          color: "white",
          marginLeft: "auto",
          marginRight: "auto",
          textTransform: "none",

          ":hover": {
            bgcolor: "rgba(76, 107, 193, 0.3)",
          },
        }}
      >
        Go Back
      </Button>
    </div>
  );
};