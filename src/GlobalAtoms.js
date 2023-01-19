import { atom } from "recoil";

// eslint-disable-next-line no-unused-vars
const loadingOverlayState = atom({
  key: "loadingOverlayState",
  default: false,
});

// eslint-disable-next-line no-unused-vars
const snackBarState = atom({
  key: "snackBarState",
  default: {
    open: false,
    type: "success",
    message: "",
  },
});

const dialogState = atom({
  key: "dialogState",
  default: {
    open: false,
    title: false,
    content: false,
    fullWidth: true,
    maxWidth: "sm",
    scroll: undefined,
    fullScreen: true,
    transition: "default",
  },
});

const confirmationDialogState = atom({
  key: "confirmationDialogState",
  default: {
    open: false,
    transition: "default",
  },
});

const handleErrorState = atom({
  key: "handleErrorState",
  default: {
    error: false,
  },
});

export {
  loadingOverlayState,
  snackBarState,
  dialogState,
  confirmationDialogState,
  handleErrorState,
};
