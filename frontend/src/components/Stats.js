import React from "react";
import { Typography, Box } from "@mui/material";

function Stats({ todos }) {

  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;

  return (
    <Box sx={{ marginBottom: 2 }}>

      <Typography variant="body1">
        Total Taches: {total}
      </Typography>

      <Typography variant="body1">
        Complétées: {completed}
      </Typography>

    </Box>
  );
}

export default Stats;