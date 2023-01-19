import React from "react";
import { useRecoilState } from "recoil";

// @material-ui components
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton, Grow, Snackbar, SnackbarContent } from "@mui/material";

import { amber, green } from "@mui/material/colors";

import { snackBarState } from "../../GlobalAtoms";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function GrowTransition(props) {
  return <Grow {...props} />;
}

const SnackbarAlert = () => {
  const [snackBarValues, setSnackBarState] = useRecoilState(snackBarState);

  const Icon = variantIcon[snackBarValues.type];

  const HandleClose = () => {
    setSnackBarState({
      open: false,
      type: snackBarValues.type,
      message: snackBarValues.message,
    });
  };

  return (
    <Snackbar
      open={snackBarValues.open}
      onClose={HandleClose}
      TransitionComponent={GrowTransition}
      autoHideDuration={6000}
      ContentProps={{
        "aria-describedby": "message-id",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <SnackbarContent
        sx={{
          ...((snackBarValues.type === "success") &
            {
              backgroundColor: `${green[600]} !important`,
            }),
          ...((snackBarValues.type === "error") &
            {
              bgcolor: "error.main !important",
            }),
          ...((snackBarValues.type === "info") &
            {
              bgcolor: "info.main !important",
            }),
          ...((snackBarValues.type === "warning") &
            {
              backgroundColor: `${amber[700]} !important`,
            }),
        }}
        aria-describedby="client-snackbar"
        message={
          <span
            id="client-snackbar"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Icon sx={{ fontSize: 20, marginRight: 10 }} />{" "}
            {snackBarValues.message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={HandleClose}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default SnackbarAlert;
