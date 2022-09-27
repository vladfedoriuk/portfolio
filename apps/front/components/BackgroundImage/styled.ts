import Box from "@mui/system/Box";
import styled from "@mui/system/styled";

export const BackgroundImageBox = styled(Box, {
  shouldForwardProp(propName) {
    return propName !== "imagePath";
  },
})<{ imagePath: string }>(({ imagePath }) => ({
  backgroundImage: `url(${imagePath})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  aspectRatio: "16 / 9",
}));
