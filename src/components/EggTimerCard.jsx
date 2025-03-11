import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import SoftBoiledIcon from "/soft_boiled_egg.png";
import HardBoiledIcon from "/egg-timer-bg.webp";
import ScrambledIcon from "/scrambled.webp";
import FriedIcon from "/sunny-side-egg.webp";

const eggOptions = [
  { label: "Soft-Boiled Egg", time: 300, icon: SoftBoiledIcon },
  { label: "Hard-Boiled Egg", time: 600, icon: HardBoiledIcon },
  { label: "Scrambled Egg", time: 180, icon: ScrambledIcon },
  { label: "Fried Egg", time: 240, icon: FriedIcon },
];

const EggTimerCard = ({ onSelect }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundImage: `url('/egg-pattern-bg.jpg')`, // ✅ Added the same background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ Dark overlay
          zIndex: 1,
        }}
      />

      <Card
        sx={{
          width: 500,
          p: 3,
          boxShadow: 3,
          position: "relative",
          zIndex: 2, // ✅ Ensure content is above overlay
          backgroundColor: "rgba(255, 255, 255, 0.9)", // ✅ Slight transparency for contrast
          borderRadius: "8px",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Select Egg Timer
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {eggOptions.map((egg) => (
              <Grid item xs={6} key={egg.label}>
                <Card
                  sx={{
                    padding: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: "#ffeb3b",
                    color: "black",
                    "&:hover": { backgroundColor: "#fbc02d" },
                  }}
                  onClick={() => onSelect(egg.time)}
                >
                  <CardContent>
                    <Box
                      component="img"
                      src={egg.icon}
                      alt={egg.label}
                      sx={{ width: 80, height: 80, marginBottom: 1 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {egg.label}
                    </Typography>
                    <Typography variant="body2">{egg.time / 60} min</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EggTimerCard;
