import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Ensure Framer Motion is installed
import { Typewriter } from "react-simple-typewriter"; // ✅ Import Typewriter

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative", // ✅ Needed for absolute overlay
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundImage: `url('/egg-pattern-bg.jpg')`, // ✅ Image from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blurred Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.2)", // ✅ Light overlay
          zIndex: 1, // ✅ Behind content but above background
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Animated Typography with Typewriter effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            <Typewriter
              words={["Welcome to the Egg Timer!"]}
              loop={1} // 0 means infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#ff5722",
              "&:hover": { backgroundColor: "#e64a19" },
              padding: "10px 30px",
              mt: 3,
            }}
          >
            Start Cooking🍳
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Welcome;
