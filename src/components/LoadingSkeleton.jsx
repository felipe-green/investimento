import React from "react";

// @material-ui components
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";

/* const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
})); */

const LoadingSkeleton = () => {
  return (
    <Box
      sx={{
        p: "24px",
      }}
    >
      <Skeleton height={12} width="40%" />
      <Skeleton height={12} width="70%" />
      <Skeleton height={12} width="30%" />
      <br />
      <Skeleton height={12} width="60%" />
      <Skeleton height={12} width="40%" />
      <Skeleton height={12} width="70%" />
      <br />
      <Skeleton height={12} width="30%" />
      <Skeleton height={12} width="60%" />
      <Skeleton height={12} width="40%" />
      <br />
      <Skeleton height={12} width="70%" />
      <Skeleton height={12} width="30%" />
      <Skeleton height={12} width="60%" />
    </Box>
  );
};

export default LoadingSkeleton;
