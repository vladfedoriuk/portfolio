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
import Image from "next/image";

const aboutTexts = [
  "I am a passionate software developer.",
  "My fields of interest range",
  "from Web Development,",
  "Mobile Development,",
  "to Machine Learning...",
  "Moreover, I am thrilled about the modern front-end world.",
];
const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave-right.svg">
      <BackgroundImageBox imagePath="/wave-left.svg">
        <Container maxWidth="xl" component="main">
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { height: "50vh" },
              [theme.breakpoints.down("sm")]: { mb: 4 },
            })}
          >
            <Container
              maxWidth="xl"
              disableGutters
              sx={{ pt: 4, display: "flex", flexDirection: "row" }}
            >
              <Card
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: "90px 10px 180px 5px",
                  height: "100%",
                }}
              >
                <Box sx={{ section: { justifyContent: "flex-start", ml: 0 } }}>
                  <Heading />
                </Box>
                <Box sx={{ section: { mt: 1.5 } }}>
                  <Contacts variant="short" />
                </Box>
              </Card>
              <Box
                sx={(theme) => ({
                  position: "relative",
                  left: 300,
                  top: 100,
                  width: 300,
                  height: 300,
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                  [theme.breakpoints.down("md")]: {
                    left: 15,
                    top: 150,
                    width: 200,
                    height: 200,
                  },
                  [theme.breakpoints.down("lg") && theme.breakpoints.up("md")]:
                    {
                      left: 100,
                      top: 150,
                      width: 200,
                      height: 200,
                    },
                  [theme.breakpoints.up("lg")]: {
                    left: 250,
                    top: 100,
                    width: 300,
                    height: 300,
                  },
                  [theme.breakpoints.up("xl")]: {
                    left: 350,
                    top: 100,
                    width: 350,
                    height: 350,
                  },
                })}
              >
                <Image src="/html-coding.svg" alt="Coding" fill />
              </Box>
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
