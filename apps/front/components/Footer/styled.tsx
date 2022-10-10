import styled from "@mui/system/styled";

export const FooterWrapper = styled("footer")(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: 3,
  paddingBottom: 6,
}));
