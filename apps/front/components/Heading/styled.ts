import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";

export const LinearGradientTypography = styled(Typography, {
  shouldForwardProp(propName) {
    return propName !== "gradientColors";
  },
})<
  TypographyProps & { gradientColors: { colorFrom: string; colorTo: string } }
>(({ gradientColors: { colorFrom, colorTo } }) => {
  return {
    background: `linear-gradient(to left top, ${colorFrom}, ${colorTo})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
});
