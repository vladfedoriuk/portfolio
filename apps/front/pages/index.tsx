import { BackgroundImageBox } from "@components/BackgroundImage/styled";
import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Technologies from "@components/Technologies";
import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave-right.svg">
      <BackgroundImageBox imagePath="/wave-left.svg">
        <Container maxWidth="xl" component="main">
          <Container maxWidth="xl" disableGutters sx={{ pt: 4 }}>
            <Card
              elevation={1}
              sx={{
                minWidth: "xs",
                maxWidth: "sm",
                p: 3,
                borderRadius: "90px 10px 180px 5px",
              }}
            >
              <Box sx={{ section: { justifyContent: "flex-start", ml: 0 } }}>
                <Heading />
              </Box>
              <Box sx={{ section: { mt: 1.5 } }}>
                <Contacts />
              </Box>
            </Card>
          </Container>

          <Box sx={{ section: { mt: 6 } }}>
            <Technologies />
          </Box>
        </Container>
      </BackgroundImageBox>
    </BackgroundImageBox>
  );
};

export default Home;
