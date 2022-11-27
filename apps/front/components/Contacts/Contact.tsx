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
    full: 0.125,
  } as const;

  const showText = variant !== "short";

  return (
    <Stack direction="row" spacing={spacingFromVariant[variant]} maxWidth="lg">
      <Link href={link}>
        <IconButton aria-label={text} sx={{ color: "text.primary" }}>
          {icon}
        </IconButton>
      </Link>
      {showText && (
        <ContactLink sx={{ alignSelf: "center", fontSize: 14 }} href={link}>
          {text}
        </ContactLink>
      )}
    </Stack>
  );
};
