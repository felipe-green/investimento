import React, { useState, useEffect } from "react";

// @material-ui components
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Grow,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

import { grey } from "@mui/material/colors";

import { useRecoilState } from "recoil";

import { dialogState } from "../../GlobalAtoms";

/* const dialogStyle = makeStyles((palette, spacing) =>
  createStyles({
    root: {
      margin: 0,
      padding: spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: spacing(1),
      top: spacing(1),
      color: palette.grey[500],
    },
  })
); */

/* const Transition = React.forwardRef((props) => <Grow ref={ref} {...props} />); */

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const DialogWrapper = () => {
  const [dialog, setDialogState] = useRecoilState(dialogState);
  const [fullScreen, setFullScreen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (dialog.fullScreen && isMobile) {
      setFullScreen(true);
    }
  }, [dialog]);

  return (
    <>
      {dialog.open && (
        <Dialog
          open={dialog.open}
          fullWidth={dialog.fullWidth}
          maxWidth={dialog.maxWidth}
          scroll={dialog.scroll}
          fullScreen={fullScreen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          TransitionComponent={Transition}
        >
          <DialogTitle sx={{ margin: 0, padding: 2 }}>
            <Typography variant="h6">{dialog.title}</Typography>
            <IconButton
              aria-label="close"
              sx={{
                position: "absolute !important",
                right: 1,
                top: 1,
                color: `${grey[500]} !important`,
              }}
              onClick={() =>
                setDialogState({
                  open: false,
                  title: false,
                  content: false,
                  fullWidth: true,
                  maxWidth: "sm",
                  scroll: undefined,
                  fullScreen: true,
                  transition: "default",
                })
              }
              size="large"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>{dialog.content}</DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default DialogWrapper;
