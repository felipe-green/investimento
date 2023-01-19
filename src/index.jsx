import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { RecoilRoot } from "recoil";

import Content from "./Content";

const defaultTheme = createTheme();

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  </StyledEngineProvider>,
  document.getElementById("root")
);
