import Box from "@mui/system/Box";
import styled from "@mui/system/styled";

export const BackgroundImageBox = styled(Box, {
  shouldForwardProp(propName) {
    return propName !== "imagePath";
  },
})<{ imagePath: string }>(({ imagePath }) => ({
  backgroundImage: `url(${imagePath})`,
  backgroundRepeat: "no-repeat" /* Do not repeat the image */,
  backgroundPosition: "center" /* Center the image */,
  backgroundSize:
    "cover" /* Resize the background image to cover the entire container */,
  width: "100%",
  aspectRatio: "16 / 9",
}));
