import React from "react";

import Switch from "@mui/material/Switch";

const SwitchPrototype = (props) => (
  <>
    <Switch
      onChange={props.onChange}
      color={props.color}
      checked={props.isChecked}
    />
  </>
);

export default SwitchPrototype;
