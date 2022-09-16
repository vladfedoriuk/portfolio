import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack, { StackProps } from "@mui/material/Stack";

import { Contact } from "./Contact";

const Contacts: React.FC<StackProps> = (props) => {
  const contacts = [
    {
      icon: <GitHubIcon fontSize="medium" />,
      text: "vladfedoriuk",
      link: "https://github.com/vladfedoriuk",
    },
    {
      icon: <EmailIcon fontSize="medium" />,
      text: "vlad.fedoriuk2000@gmail.com",
      link: "mailto:vlad.fedoriuk2000@gmail.com",
    },
  ];

  return (
    <Stack spacing={2} direction="row" {...props}>
      {contacts.map((element) => (
        <Contact key={element.text} {...element} />
      ))}
    </Stack>
  );
};

export default Contacts;
