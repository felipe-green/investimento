import React from "react";

import withStyles from "@mui/styles/withStyles";
import { FormControlLabel } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Switch, { SwitchProps } from "@mui/material/Switch";

import { green, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const GreenSwitch = styled(Switch)({
  switchBase: {
    color: `${grey[200]} !important`,
    "&$checked": {
      color: `${green[700]} !important`,
    },
    "&$checked + $track": {
      backgroundColor: `${green[500]} !important`,
    },
  },
  checked: {},
  track: {},
});

/* const useStyles = makeStyles({
  formControllLabel: {
    marginTop: 10,
  },
}); */

const SwitchWrapper = (props) => (
  /* const classes = useStyles(); */

  <FormControlLabel
    sx={{ marginTop: 10 }}
    labelPlacement="top"
    control={<GreenSwitch type="checkbox" {...props} />}
    {...props}
  />
);
export default SwitchWrapper;
