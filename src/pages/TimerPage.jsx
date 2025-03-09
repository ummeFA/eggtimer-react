import React from "react";
import Timer from "../components/Timer";
import { Box } from "@mui/material";

const TimerPage = ({ initialTime, onback }) => {
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
      <Timer initialTime={initialTime} onback={onback} />
    </Box>
  );
};

export default TimerPage;
