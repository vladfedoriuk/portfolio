import Link from "@components/Link";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { ContactLink } from "./styled";

export interface ContactProps {
  icon: JSX.Element;
  text: string;
  link: string;
}
export const Contact: React.FC<ContactProps> = ({ icon, text, link }) => {
  return (
    <Stack direction="row" spacing={0.5} maxWidth="sm">
      <Link href={link}>
        <IconButton aria-label={text} sx={{ color: "text.primary" }}>
          {icon}
        </IconButton>
      </Link>
      <ContactLink
        sx={{ display: { md: "flex", xs: "none" }, alignSelf: "center" }}
        href={link}
      >
        {text}
      </ContactLink>
    </Stack>
  );
};
