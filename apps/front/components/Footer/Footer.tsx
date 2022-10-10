import Contacts from "@components/Contacts";
import Link from "@components/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { FooterWrapper } from "./styled";

interface FooterProps {
  footers: Array<{
    title: string;
    items: Array<{
      link: string;
      title: string;
    }>;
  }>;
}
const Footer: React.FC<FooterProps> = ({ footers }) => {
  return (
    <FooterWrapper>
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contacts
          </Typography>
          <Contacts variant="full" />
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};

export default Footer;
