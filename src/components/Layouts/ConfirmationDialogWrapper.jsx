import React from "react";

// @material-ui components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grow,
  Theme,
} from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Close as CloseIcon, Check as CheckIcon } from "@mui/icons-material";

import { TransitionProps } from "@mui/material/transitions";

import { useRecoilState } from "recoil";

import { grey, indigo, red } from "@mui/material/colors";
import { confirmationDialogState } from "../../GlobalAtoms";

/* const confirmationDialogStyle = makeStyles((spacing) =>
  createStyles({
    root: {
      margin: 0,
      padding: spacing(2),
    },
    cancelButton: {
      color: grey[50],
      backgroundColor: red[800],
      "&:hover": {
        backgroundColor: red[900],
      },
    },
    confirmButton: {
      color: grey[50],
      backgroundColor: indigo[700],
      "&:hover": {
        backgroundColor: indigo[600],
      },
    },
  })
); */

const Transition = React.forwardRef((props, ref) => (
  <Grow ref={ref} {...props} />
));

const ConfirmationDialogWrapper = () => {
  const [confirmationDialog, setConfirmationDialogState] = useRecoilState(
    confirmationDialogState
  );

  /* const customClasses = confirmationDialogStyle(); */

  const confirm = () => {
    if (confirmationDialog.action) {
      confirmationDialog.action();
    }
    setConfirmationDialogState({
      open: false,
      transition: "default",
      cancelText: false,
      confirmationText: false,
    });
  };

  return (
    <>
      {confirmationDialog.open && (
        <Dialog
          open={confirmationDialog.open}
          fullWidth
          maxWidth="xs"
          scroll="paper"
          aria-labelledby="alert-confirmationDialog-title"
          aria-describedby="alert-confirmationDialog-description"
          TransitionComponent={Transition}
        >
          <DialogContent>
            <DialogContentText>{confirmationDialog.question}</DialogContentText>
          </DialogContent>
          {confirmationDialog.action ? (
            <DialogActions>
              <Button
                sx={{
                  color: `${grey[50]} !important`,
                  backgroundColor: `${red[800]} !important`,
                  "&:hover": {
                    backgroundColor: `${red[900]} !important`,
                  },
                }}
                onClick={() =>
                  setConfirmationDialogState({
                    open: false,
                    transition: "default",
                    cancelText: false,
                    confirmationText: false,
                  })
                }
                size="small"
                startIcon={<CloseIcon />}
                variant="contained"
              >
                {confirmationDialog.cancelText
                  ? confirmationDialog.cancelText
                  : "Cancelar"}
              </Button>
              <Button
                autoFocus
                sx={{
                  color: `${grey[50]} !important`,
                  backgroundColor: `${indigo[700]} !important`,
                  "&:hover": {
                    backgroundColor: `${indigo[600]} !important`,
                  },
                }}
                onClick={confirm}
                size="small"
                startIcon={<CheckIcon />}
                variant="contained"
              >
                {confirmationDialog.confirmationText
                  ? confirmationDialog.confirmationText
                  : "Confirmar"}
              </Button>
            </DialogActions>
          ) : (
            <DialogActions>
              <Button
                sx={{
                  color: `${grey[50]} !important`,
                  backgroundColor: `${red[800]} !important`,
                  "&:hover": {
                    backgroundColor: `${red[900]} !important`,
                  },
                }}
                onClick={() =>
                  setConfirmationDialogState({
                    open: false,
                    transition: "default",
                    cancelText: false,
                    confirmationText: false,
                  })
                }
                size="small"
                startIcon={<CloseIcon />}
                variant="contained"
              >
                Fechar
              </Button>
            </DialogActions>
          )}
        </Dialog>
      )}
    </>
  );
};

export default ConfirmationDialogWrapper;
