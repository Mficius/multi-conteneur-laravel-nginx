import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header({ toggleTheme }) {

  return (
    <AppBar position="static">

      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Todo Dashboard
        </Typography>

        <IconButton color="inherit" onClick={toggleTheme}>
          <DarkModeIcon />
        </IconButton>

      </Toolbar>

    </AppBar>
  );
}

export default Header;