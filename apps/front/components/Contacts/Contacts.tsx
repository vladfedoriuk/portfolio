import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";

import { Contact } from "./Contact";

const Contacts = () => {
  const contacts = [
    {
      slug: "github",
      icon: <GitHubIcon fontSize="medium" />,
      text: "vladfedoriuk",
      link: "https://github.com/vladfedoriuk",
    },
    {
      slug: "email",
      icon: <EmailIcon fontSize="medium" />,
      text: "vlad.fedoriuk2000@gmail.com",
      link: "mailto:vlad.fedoriuk2000@gmail.com",
    },
  ];

  return (
    <Stack spacing={2} direction="row" component="section">
      {contacts.map(({ slug, ...rest }) => (
        <Contact key={slug} {...rest} />
      ))}
    </Stack>
  );
};

export default Contacts;
