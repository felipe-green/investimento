import React from "react";

// @material-ui components
import { Button } from "@mui/material";
import Close from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";

/* const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
  minWidth: "0 !important",
  padding: "8px 10px !important",
})); */

const DeleteButton = (props) => (
  <Button
    sx={{
      color: "#fff !important",
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
    <Close fontSize="small" /> {props.children}
  </Button>
);

export default DeleteButton;
