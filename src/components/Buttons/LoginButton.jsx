import React from "react";

import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import { CircularProgress, styled } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { grey, blue } from "@mui/material/colors";

const ColorButton = styled(Button)(() => ({
  root: {
    color: "#fff",
    backgroundColor: blue[600],
    "&:hover": {
      backgroundColor: blue[700],
    },
    width: "100%",
    padding: "8px 12px !important",
  },
}));

/* const useStyles = makeStyles(() => ({
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  loadingIcon: {
    animationDuration: "550ms",
    color: grey[600],
    marginRight: 10,
  },
})); */

const LoginButton = (props) => {
  /* const classes = useStyles(); */

  return (
    <ColorButton variant="contained" {...props}>
      {props.icon && !props.disabled && (
        <props.icon
          sx={{ fontSize: 18, marginRight: 10 }}
          /* className={classes.icon} */
        />
      )}
      {props.disabled && (
        <CircularProgress
          sx={{ animationDuration: "550ms", color: grey[600], marginRight: 10 }}
          /* className={classes.loadingIcon} */
          size={18}
          disableShrink
        />
      )}
      {props.children && <> {props.children}</>}
    </ColorButton>
  );
};

export default LoginButton;
