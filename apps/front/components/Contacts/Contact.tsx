import Stack from "@mui/material/Stack";

import { ContactLink } from "./styled";

export interface ContactProps {
  icon: JSX.Element;
  text: string;
  link: string;
}
export const Contact: React.FC<ContactProps> = ({ icon, text, link }) => {
  return (
    <Stack direction="row" spacing={1}>
      {icon}
      <ContactLink href={link}>{text}</ContactLink>
    </Stack>
  );
};
