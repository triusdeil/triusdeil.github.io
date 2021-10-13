import React from "react";
import Navbar from "../navbar/Navbar";
import { Grid } from "@mui/material";
import Home from "../body/home/Home";
export default function Main() {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={6} md={8} lg={10} xl={12}>
          <Home />
        </Grid>
      </Grid>
    </>
  );
}
