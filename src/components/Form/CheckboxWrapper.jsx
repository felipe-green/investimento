import React from "react";

// @material-ui components
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckboxWrapper = (props) => (
  <FormControlLabel
    control={<Checkbox color="primary" {...props} />}
    label={props.label}
  />
);

export default CheckboxWrapper;
