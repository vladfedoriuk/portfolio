import Link from "@components/Link";
import { styled, Theme } from "@mui/material/styles";

export const linkStyleMixin = <T extends { theme: Theme }>({ theme }: T) => `
  position: relative;
  color: ${theme.palette.text.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.palette.text.primary};
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: ${theme.spacing(0.25)};
    bottom: 0;
    left: 0;
    background-color: ${theme.palette.primary.light};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const StyledLink = styled(Link)`
  ${linkStyleMixin}
`;

export default StyledLink;
