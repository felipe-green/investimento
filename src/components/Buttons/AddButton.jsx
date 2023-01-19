import React from "react";

// @material-ui components
import { Add as AddIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

/* const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${blue[500]} !important`,
  "&:hover": {
    backgroundColor: `${blue[700]} !important`,
  },
  minWidth: "0 !important",
  padding: "8px 10px !important",
  [theme.breakpoints.down("sm")]: {
    height: 68,
    width: 50,
    borderRadius: "0 !important",
    boxShadow: "none",
  },
})); */

const AddButton = (props) => {
  return (
    <>
      <Box display={{ xs: "block", sm: "none" }}>
        <Button
          sx={{
            backgroundColor: `${blue[500]} !important`,
            "&:hover": {
              backgroundColor: `${blue[700]} !important`,
            },
            minWidth: "0 !important",
            padding: "8px 10px !important",
            height: { xs: 68 },
            width: { xs: 50 },
            borderRadius: { xs: "0 !important", md: "4px !important" },
            boxShadow: { xs: "none" },
          }}
          variant="contained"
          disableElevation
          display={{ xs: "block", sm: "none" }}
          size="small"
          {...props}
        >
          <AddIcon
            sx={{
              fontSize: { xs: "medium", sm: "large" },
              marginRight: { xs: 0, sm: 10 },
            }}
          />
        </Button>
      </Box>
      <Box display={{ xs: "none", sm: "inline" }}>
        <Button
          sx={{
            backgroundColor: `${blue[500]} !important`,
            "&:hover": {
              backgroundColor: `${blue[700]} !important`,
            },
            minWidth: "0 !important",
            padding: "8px 10px !important",
            height: { xs: 68, md: "auto" },
            width: { xs: 50, md: "auto" },
            borderRadius: { xs: "0 !important ", md: "4px !important" },
            boxShadow: { xs: "none", md: "auto" },
            /* [theme.breakpoints.down("sm")]: {
              height: 68,
              width: 50,
              borderRadius: "0 !important",
              boxShadow: "none",
            }, */
          }}
          variant="contained"
          disableElevation
          display={{ xs: "none", sm: "block" }}
          size="small"
          {...props}
        >
          <AddIcon
            sx={{
              fontSize: { xs: "medium", sm: "large" },
              mr: { xs: 0, sm: 10 },
            }}
          />
          {props.children}
        </Button>
      </Box>
    </>
  );
};

export default AddButton;
