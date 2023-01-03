import About from "@components/About";
import { BackgroundImageBox } from "@components/BackgroundImage/styled";
import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Projects from "@components/Projects";
import Technologies from "@components/Technologies";
import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import { motion } from "framer-motion";
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

const image1Animation = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 100 },
      duration: 1,
      delay: 1,
    },
  },
};

const image2Animation = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 100 },
      duration: 1,
      delay: 1.5,
    },
  },
};

const headerAnimation = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 100 },
      duration: 0.5,
    },
  },
};

const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave-right.svg">
      <BackgroundImageBox imagePath="/wave-left.svg">
        <Container maxWidth="xl" component="main">
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { mb: 8 },
              [theme.breakpoints.down("sm")]: { mb: 4 },
            })}
          >
            <Container
              maxWidth="xl"
              disableGutters
              sx={{ pt: 4, display: "flex", flexDirection: "row" }}
            >
              <Card
                component={motion.div}
                variants={headerAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
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
                component={motion.div}
                variants={image1Animation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
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
          <Box
            sx={{
              mt: {
                sm: 8,
                md: 16,
              },
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              component={motion.div}
              variants={image2Animation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              sx={(theme) => ({
                position: "relative",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
                [theme.breakpoints.between("sm", "md")]: {
                  left: -20,
                  top: -50,
                  width: 200,
                  height: 200,
                },
                [theme.breakpoints.between("md", "lg")]: {
                  left: 50,
                  top: -80,
                  width: 200,
                  height: 200,
                },
                [theme.breakpoints.between("lg", "xl")]: {
                  left: -20,
                  top: -100,
                  width: 300,
                  height: 300,
                },
                [theme.breakpoints.up("xl")]: {
                  left: 50,
                  top: -100,
                  width: 350,
                  height: 350,
                },
              })}
            >
              <Image src="/app-coding.svg" alt="Coding" fill />
            </Box>
            <About texts={aboutTexts} />
          </Box>
          <Technologies />
          <Projects />
        </Container>
      </BackgroundImageBox>
    </BackgroundImageBox>
  );
};

export default Home;
