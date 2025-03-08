import React from "react";
import Timer from "../components/Timer";
import { Container } from "@mui/material";

const TimerPage = ({ initialTime, onback }) => {
  return (
    <Container>
      <Timer initialTime={initialTime} onback={onback} />
    </Container>
  );
};

export default TimerPage;
