import React from "react";

// @material-ui components
import Box from "@mui/material/Box";
import LoadingSkeleton from "./LoadingSkeleton";

/* const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0),
    margin: theme.spacing(0, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 3),
    },
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
})); */

const ContentWrapper = (props) => {
  if (props.loading === true) {
    return <LoadingSkeleton />;
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        margin: 0,
        padding: {
          sm: "24px 24px",
          xs: 0,
        },
      }}
    >
      {props.children}
    </Box>
  );
};

export default ContentWrapper;
