import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

type LinearGradientTypographyProps<C extends React.ElementType> =
  TypographyProps<C, { component?: C }> & {
    gradientColors: { colorFrom: string; colorTo: string };
  };
export const LinearGradientTypography = styled(Typography, {
  shouldForwardProp(propName) {
    return propName !== "gradientColors";
  },
})<LinearGradientTypographyProps<React.ElementType>>(
  ({ gradientColors: { colorFrom, colorTo } }) => {
    return {
      background: `linear-gradient(to left top, ${colorFrom}, ${colorTo})`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    };
  }
);
