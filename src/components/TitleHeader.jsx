import React from "react";

// @material-ui components
import { Typography } from "@mui/material/";

const TitleHeader = (props) => {
  return (
    <Typography variant="h6" sx={{ mt: { sm: 1 } }}>
      {props.children}
    </Typography>
  );
};

export default TitleHeader;
