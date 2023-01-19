import React from "react";

// @material-ui components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import BackButton from "./Buttons/BackButton";

const MainHeader = (props) => (
  <>
    <Hidden smUp implementation="css">
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Box textAlign="left">
            <BackButton />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box textAlign="center" sx={{ marginTop: "20px !imporant" }}>
            {props.title}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box textAlign="right">{props.button}</Box>
        </Grid>
      </Grid>
    </Hidden>
    <Hidden smDown implementation="css">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          {props.title}
        </Grid>
        <Grid item sm={6}>
          <Box textAlign="right">
            <BackButton /> {props.button}
          </Box>
        </Grid>
      </Grid>
    </Hidden>
  </>
);

export default MainHeader;
