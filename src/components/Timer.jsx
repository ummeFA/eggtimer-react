import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion"; // ✅ Import motion for animation

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
      {/* 🟡 Animated Round Yellow Container */}
      <motion.div
        initial={{ scale: 1 }}
        animate={isRunning ? { scale: [1, 1.05, 1] } : { scale: 1 }} // 🔥 Pulsing when running
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          backgroundColor: "#ffeb3b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
          padding: "20px",
        }}
      >
        {/* Timer Text */}
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
        </Typography>

        {/* Buttons Inside the Circle */}
        <Box display="flex" gap={1}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              color: "white",
              "&:hover": { backgroundColor: "darkgreen" },
            }}
            onClick={() => setIsRunning(true)}
          >
            Start
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange",
              color: "white",
              "&:hover": { backgroundColor: "darkorange" },
            }}
            onClick={() => setIsRunning(false)}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": { backgroundColor: "darkred" },
            }}
            onClick={() => setTime(initialTime)}
          >
            Reset
          </Button>
        </Box>
      </motion.div>

      {/* Back Button (Outside the Circle) */}
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
