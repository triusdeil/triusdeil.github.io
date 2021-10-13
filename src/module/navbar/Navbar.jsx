import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, Grid } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontWeight: 600 }}
          >
            Triusdeil
          </Typography>
          <Grid container alignItems="center" justifyContent="center">
            <Button style={{ color: "#000000" }} variant="text">
              Home
            </Button>
            <Button style={{ color: "#000000" }} variant="text">
              About
            </Button>
            <Button style={{ color: "#000000" }} variant="text">
              Contact me
            </Button>
            <Button style={{ color: "#000000" }} variant="text">
              Works
            </Button>
          </Grid>

          <Button
            size="medium"
            style={{
              color: "#FFFFFF",
              backgroundColor: "#4B3AF0",
              borderRadius: 20,
              width: "8%",
              fontWeight: 550,
            }}
            variant="text"
          >
            Let's Talk
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
