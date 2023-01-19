import React from "react";

// @material-ui components
import { Button, styled } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import { orange } from "@mui/material/colors";

/* const ColorButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
  minWidth: "0 !important",
  padding: "8px 10px !important",
})); */

const EditButton = (props) => (
  <Button
    sx={{
      color: "#fff",
      backgroundColor: `${orange[500]} !important`,
      "&:hover": {
        backgroundColor: `${orange[700]} !important`,
      },
      minWidth: "0 !important",
      padding: "8px 10px !important",
    }}
    variant="contained"
    size="small"
    {...props}
  >
    <Edit fontSize="small" /> {props.children}
  </Button>
);

export default EditButton;
