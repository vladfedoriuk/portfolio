import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    navigation: true;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#083d77",
    },
    secondary: {
      main: "#8e5572",
    },
    error: {
      main: "#f95738",
    },
    warning: {
      main: "#FE9920",
    },
    info: {
      main: "#4c5454",
    },
    success: {
      main: "#849324",
    },
  },
});

export const theme = responsiveFontSizes(
  createTheme(baseTheme, {
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "navigation" },
            style: {
              ...baseTheme.typography.button,
              my: 1,
              letterSpacing: ".1rem",
            },
          },
        ],
      },
    },
  })
);
