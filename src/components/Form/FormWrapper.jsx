import React from "react";

import makeStyles from "@mui/styles/makeStyles";

/* const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
})); */

const FormWrapper = (props) => (
  /* const classes = useStyles(); */

  <form
    style={{ display: "flex", flexWrap: "wrap" }}
    autoComplete="on"
    {...props}
  >
    {props.children}
  </form>
);
export default FormWrapper;
