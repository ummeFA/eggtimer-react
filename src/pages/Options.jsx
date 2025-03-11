import React from "react";
import EggTimerCard from "../components/EggTimerCard";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();

  return <EggTimerCard onSelect={(time) => navigate(`/timer/${time}`)} />;
};

export default Options;
