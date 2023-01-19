import React, { useEffect } from "react";

import { useRecoilState } from "recoil";

import {
  confirmationDialogState,
  handleErrorState,
  loadingOverlayState,
} from "../../GlobalAtoms";

const HandleError = () => {
  const [confirmationDialog, setConfirmationDialogState] = useRecoilState(
    confirmationDialogState
  );

  const [handleError, setHandleError] = useRecoilState(handleErrorState);

  // eslint-disable-next-line no-unused-vars
  const [loadingOverlay, setLoadingOverlayState] =
    useRecoilState(loadingOverlayState);

  useEffect(() => {
    if (handleError.response && handleError.error === true) {
      const { status, data } = handleError.response;
      switch (status) {
        case 401:
          /* window.localStorage.removeItem("ucode");
          window.location.href = "/login"; */
          break;
        case 403:
          setConfirmationDialogState({
            ...confirmationDialog,
            open: true,
            question: `Você não tem autorização para realizar essa ação.`,
            transition: "default",
          });
          setHandleError({
            error: false,
          });
          setLoadingOverlayState(false);
          break;
        case 409:
          setConfirmationDialogState({
            ...confirmationDialog,
            open: true,
            question: data.message,
            transition: "default",
          });
          setHandleError({
            error: false,
          });
          setLoadingOverlayState(false);
          break;
        default:
          setConfirmationDialogState({
            ...confirmationDialog,
            open: true,
            question: `Houve um erro ao processar essa ação. Verifique os dado enviados.`,
            transition: "default",
          });
          setHandleError({
            error: false,
          });
          setLoadingOverlayState(false);
          break;
      }
    }
  }, [handleError]);

  return <></>;
};

export default HandleError;
