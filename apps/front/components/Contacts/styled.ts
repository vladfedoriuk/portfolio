import Link from "@components/Link";
import styled from "@mui/system/styled";

export const ContactLink = styled(Link)(({ theme }) => ({
  color: theme.palette.info.main,
  textDecoration: "none",
  ":hover": { color: theme.palette.text.primary },
}));
