import React from "react";

// @material-ui components

import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { grey } from "@mui/material/colors";

/* const ColorButton = styled(Button)(({ theme }) => ({
  root: {
    color: grey[700],
    backgroundColor: grey[300],
    "&:hover": {
      backgroundColor: grey[200],
    },
    minWidth: "0 !important",
    padding: "8px 10px !important",
    [theme.breakpoints.down("sm")]: {
      height: 68,
      width: 50,
      borderRadius: 0,
      boxShadow: "none",
      backgroundColor: grey[300],
      "&:hover": {
        backgroundColor: grey[500],
      },
    },
  },
})); */

const BackButton = (props) => {
  const clientHistory = useHistory();

  return (
    <>
      <Box display={{ xs: "block", sm: "none" }}>
        <Button
          sx={{
            color: `${grey[700]} !important`,
            backgroundColor: `${grey[300]} !important`,
            "&:hover": {
              backgroundColor: `${grey[200]} !important`,
            },
            minWidth: "0 !important",
            padding: "8px 10px !important",
            /* [theme.breakpoints.down("sm")]: {
              height: 68,
              width: 50,
              borderRadius: 0,
              boxShadow: "none",
              backgroundColor: grey[300],
              "&:hover": {
                backgroundColor: grey[500],
              },
            }, */
          }}
          variant="contained"
          disableElevation
          size="small"
          onClick={clientHistory.goBack}
          {...props}
        >
          <ArrowBackIos
            viewBox="0 0 13 24"
            sx={{
              fontSize: { xs: 23, sm: 18 },
            }}
          />
        </Button>
      </Box>
      <Box display={{ xs: "none", sm: "inline" }}>
        <Button
          sx={{
            color: `${grey[700]} !important`,
            backgroundColor: `${grey[300]} !important`,
            "&:hover": {
              backgroundColor: `${grey[200]} !important`,
            },
            minWidth: "0 !important",
            padding: "8px 10px !important",
            /* [theme.breakpoints.down("sm")]: {
              height: 68,
              width: 50,
              borderRadius: 0,
              boxShadow: "none",
              backgroundColor: grey[300],
              "&:hover": {
                backgroundColor: grey[500],
              },
            }, */
          }}
          variant="contained"
          disableElevation
          size="small"
          onClick={clientHistory.goBack}
          {...props}
        >
          <ArrowBackIos
            sx={{
              fontSize: { xs: 23, sm: 18 },
            }}
          />
          Voltar
        </Button>
      </Box>
    </>
  );
};

export default BackButton;
