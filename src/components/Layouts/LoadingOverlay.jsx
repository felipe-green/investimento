import React from "react";

// @material-ui components
import { Backdrop, CircularProgress } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { grey } from "@mui/material/colors";

import { useRecoilValue } from "recoil";
import { loadingOverlayState } from "../../GlobalAtoms";

/* const useStyles = makeStyles(
  createStyles({
    backdrop: {
      zIndex: 1301,
      color: "#fff",
    },
    loadingIcon: {
      animationDuration: "550ms",
      color: grey[300],
    },
  })
); */

const LoadingOverlay = () => {
  /* const classes = useStyles(); */

  const loadingOverlay = useRecoilValue(loadingOverlayState);

  return (
    <>
      {loadingOverlay && (
        <Backdrop
          sx={{ zIndex: 1301, color: "#fff" }}
          open={loadingOverlay}
          transitionDuration={0}
        >
          <CircularProgress
            sx={{
              animationDuration: "550ms",
              color: grey[300],
            }}
            size={120}
            disableShrink
            color="inherit"
          />
        </Backdrop>
      )}
    </>
  );
};

export default LoadingOverlay;
