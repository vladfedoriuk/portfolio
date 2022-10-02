import Link from "@components/Link";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { ContactLink } from "./styled";

export interface ContactProps {
  icon: JSX.Element;
  text: string;
  link: string;
  variant: "short" | "full";
}
export const Contact: React.FC<ContactProps> = ({
  icon,
  text,
  link,
  variant,
}) => {
  const spacingFromVariant = {
    short: 0,
    full: 0.5,
  } as const;

  const showText = variant !== "short";

  return (
    <Stack direction="row" spacing={spacingFromVariant[variant]} maxWidth="sm">
      <Link href={link}>
        <IconButton aria-label={text} sx={{ color: "text.primary" }}>
          {icon}
        </IconButton>
      </Link>
      {showText && (
        <ContactLink
          sx={{ display: { md: "flex", xs: "none" }, alignSelf: "center" }}
          href={link}
        >
          {text}
        </ContactLink>
      )}
    </Stack>
  );
};
