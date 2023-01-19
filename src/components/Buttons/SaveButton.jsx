import React from "react";

import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import Save from "@mui/icons-material/Save";
import { blue } from "@mui/material/colors";
import { styled } from "@material-ui/core";

/* const ColorButton = styled(Button)(() => ({
  root: {
    color: "#fff",
    backgroundColor: `${blue[600]} !important`,
    "&:hover": {
      backgroundColor: blue[700],
    },
    width: "100%",
    padding: "8px 12px !important",
  },
})); */

const SaveButton = (props) => (
  <Button
    sx={{
      color: "#fff",
      backgroundColor: `${blue[600]} !important`,
      "&:hover": {
        backgroundColor: `${blue[700]} !important`,
      },
      width: "100% !important",
      padding: "8px 12px !important",
    }}
    variant="contained"
    {...props}
  >
    <Save style={{ fontSize: 18, marginRight: 10 }} />
    Salvar {props.children && <> {props.children}</>}
  </Button>
);

export default SaveButton;
