import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const eggOptions = [
  { label: "Soft-Boiled Egg", time: 300 },
  { label: "Hard-Boiled Egg", time: 600 },
  { label: "Scrambled Egg", time: 180 },
  { label: "Fried Egg", time: 240 },
];

const EggTimerCard = ({ onSelect }) => {
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
      <Card
        sx={{
          width: 500,
          p: 3,
          boxShadow: 3,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            borderRadius: "4px",
          }}
        />

        <CardContent
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <Typography variant="h5" gutterBottom>
            Select Egg Timer 🍳
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
