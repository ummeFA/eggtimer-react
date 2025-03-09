import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import EggTimerCard from "../components/EggTimerCard";
import TimerPage from "./TimerPage";

const WelcomePage = ({ onStart }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#FFEB3B",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      color="primary"
      sx={{ fontWeight: "bold" }}
    >
      Welcome to the Egg Timer!
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      onClick={onStart}
      sx={{ mt: 2 }}
    >
      Start
    </Button>
  </Box>
);

const Home = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {showWelcome ? (
        <WelcomePage onStart={() => setShowWelcome(false)} />
      ) : selectedTime ? (
        <TimerPage
          initialTime={selectedTime}
          onBack={() => setSelectedTime(null)}
        />
      ) : (
        <EggTimerCard onSelect={setSelectedTime} />
      )}
    </Box>
  );
};

export default Home;
