import React from "react";
import { Typography, Grid } from "@mui/material";
import ReactRoundedImage from "react-rounded-image";
import User from "../../../images/user.png";
export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div style={{ textAlign: "center", marginTop: "25%" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontWeight: 600 }}
          >
            This is my <div style={{ color: "blue" }}>new</div> web site
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} style={{ alignContent: "center" }}>
        <ReactRoundedImage
          image={User}
          roundedColor="#000000"
          imageWidth="550"
          imageHeight="550"
          roundedSize="1"
          hoverColor="#4B3AF0"
        />
      </Grid>
    </Grid>
  );
}
