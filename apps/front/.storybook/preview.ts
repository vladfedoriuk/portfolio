// https://storybook.js.org/recipes/@mui/material
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withMuiTheme = (Story) => {
  return React.createElement(ThemeProvider, {
    theme,
    children: [React.createElement(CssBaseline), React.createElement(Story)],
  });
};
export const decorators = [withMuiTheme];
