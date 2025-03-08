import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";

const Timer = ({ initialTime, onBack }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
      alert("Your egg is ready! 🍳");
    }
    return () => clearTimeout(timer);
  }, [time, isRunning]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h3" gutterBottom>
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </Typography>

      <Box display="flex" gap={2} mt={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setIsRunning(true)}
        >
          Start
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setTime(initialTime)}
        >
          Reset
        </Button>
      </Box>

      {/* Back Button */}
      <Button
        variant="outlined"
        color="primary"
        onClick={onBack}
        sx={{ mt: 3 }}
      >
        Back to Options
      </Button>
    </Box>
  );
};

export default Timer;
