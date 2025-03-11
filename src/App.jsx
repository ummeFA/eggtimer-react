import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import TimerPage from "./pages/TimerPage";
import Options from "./pages/Options";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/*  Welcome Page */}
        <Route path="/home" element={<Options />} /> {/* Egg Timer Options */}
        <Route path="/timer/:time" element={<TimerPage />} /> {/* Timer Page */}
      </Routes>
    </Router>
  );
};

export default App;
