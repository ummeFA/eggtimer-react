import React, { useState } from "react";
import EggTimerCard from "../components/EggTimerCard";
import TimerPage from "./TimerPage";

const Home = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div>
      {selectedTime ? (
        <TimerPage
          initialTime={selectedTime}
          onBack={() => setSelectedTime(null)}
        />
      ) : (
        <EggTimerCard onSelect={setSelectedTime} />
      )}
    </div>
  );
};

export default Home;
