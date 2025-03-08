import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const EggTimerCard = ({ onSelect }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // This ensures full-screen centering
    >
      <Card sx={{ maxWidth: 400, p: 3, textAlign: "center", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Select Egg Timer 🍳
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => onSelect(600)}
          >
            Hard-Boiled Egg (10 min)
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => onSelect(300)}
          >
            Soft-Boiled Egg (5 min)
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EggTimerCard;
