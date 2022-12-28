import About from "@components/About";
import { BackgroundImageBox } from "@components/BackgroundImage/styled";
import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Projects from "@components/Projects";
import Technologies from "@components/Technologies";
import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const aboutTexts = [
  "I am a passionate software developer.",
  "My fields of interest range",
  "from Web Development,",
  "Mobile Development,",
  "to Machine Learning...",
  "Also, I am thrilled about the modern front-end world.",
  "Mostly React, React Native and Vue.",
];
const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave-right.svg">
      <BackgroundImageBox imagePath="/wave-left.svg">
        <Container maxWidth="xl" component="main">
          <Box sx={{ height: "100vh" }}>
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
                  <Contacts variant="short" />
                </Box>
              </Card>
            </Container>
          </Box>
          <Technologies />
          <About texts={aboutTexts} />
          <Projects />
        </Container>
      </BackgroundImageBox>
    </BackgroundImageBox>
  );
};

export default Home;
