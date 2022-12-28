import Box from "@mui/system/Box";
import styled from "@mui/system/styled";

export const BackgroundImageBox = styled(Box, {
  shouldForwardProp(propName) {
    return propName !== "imagePath";
  },
})<{ imagePath: string }>(({ imagePath }) => ({
  background: `url(${imagePath}) no-repeat center center fixed`,
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  OBackgroundSize: "cover",
  backgroundSize: "cover",
  aspectRatio: "16/9",
}));
