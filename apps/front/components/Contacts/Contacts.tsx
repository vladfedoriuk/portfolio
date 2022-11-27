import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";

import { Contact } from "./Contact";

const Contacts = ({ variant = "short" }: { variant?: "short" | "full" }) => {
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

  const directionsFromVariant = {
    short: "row",
    full: "column",
  } as const;

  const spacingFromVariant = {
    short: 0.25,
    full: 0,
  } as const;

  return (
    <Stack
      spacing={spacingFromVariant[variant]}
      direction={directionsFromVariant[variant]}
      component="section"
      maxWidth="sm"
    >
      {contacts.map(({ slug, ...rest }) => (
        <Contact key={slug} variant={variant} {...rest} />
      ))}
    </Stack>
  );
};

export default Contacts;
