import React from "react";

import TextField from "@mui/material/TextField";

const TextFieldWrapper = (props) => (
  <TextField
    sx={{ textField: { width: "100%" } }}
    margin="normal"
    variant="outlined"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />
);

export default TextFieldWrapper;
