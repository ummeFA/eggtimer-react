import React from "react";
import Timer from "../components/Timer";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const TimerPage = () => {
  const navigate = useNavigate();
  const { time } = useParams();

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
      <Timer initialTime={parseInt(time)} onBack={() => navigate("/home")} />
    </Box>
  );
};

export default TimerPage;
