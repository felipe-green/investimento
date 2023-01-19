import React from "react";

// @material-ui components
import Divider from "@mui/material/Divider";

/* const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(3, 0),
    },
  },
})); */

const DividerWrapper = () => {
  return <Divider sx={{ margin: { xs: "0", sm: "24px 0" } }} />;
};

export default DividerWrapper;
