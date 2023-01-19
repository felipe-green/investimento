import React from "react";

// @material-ui components
import { Button, styled } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import { red, green } from "@mui/material/colors";

/* const RedButton = styled(Button)(() => ({
  root: {
    color: "#fff",
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
    minWidth: "0 !important",
    padding: "8px 10px !important",
  },
})); */

/* const GreenButton = styled(Button)(() => ({
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
    minWidth: "0 !important",
    padding: "8px 10px !important",
  },
})); */

const DeleteButtonActivation = (props) => {
  if (props.active === 1) {
    return (
      <Button
        sx={{
          color: "#fff",
          backgroundColor: `${red[500]} !important`,
          "&:hover": {
            backgroundColor: `${red[700]} !important`,
          },
          minWidth: "0 !important",
          padding: "8px 10px !important",
        }}
        variant="contained"
        size="small"
        {...props}
      >
        <PowerSettingsNew style={{ fontSize: 18 }} /> {props.children}
      </Button>
    );
  } else {
    return (
      <Button
        sx={{
          color: "red",
          backgroundColor: `${green[500]} !important`,
          "&:hover": {
            backgroundColor: `${green[700]} !important`,
          },
          minWidth: "0 !important",
          padding: "8px 10px !important",
        }}
        variant="contained"
        size="small"
        {...props}
      >
        <PowerSettingsNew style={{ fontSize: 18 }} /> {props.children}
      </Button>
    );
  }
};

export default DeleteButtonActivation;
