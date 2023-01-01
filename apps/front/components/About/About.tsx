import Section from "@components/Section";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import BrowserWrapper from "./BrowserWrapper";

const aboutAnimation = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 100 },
      duration: 0.5,
      delay: 2,
    },
  },
};

const About = ({ texts }: { texts: string[] }) => {
  return (
    <Container
      component={motion.section}
      variants={aboutAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      maxWidth="xs"
      disableGutters
    >
      <Section title="About me">
        <BrowserWrapper
          sx={{
            p: 1.5,
            minWidth: (theme) => ({
              xs: theme.spacing(45),
              sm: theme.spacing(57),
              md: theme.spacing(67),
              lg: theme.spacing(77),
              xl: theme.spacing(87),
            }),
            minHeight: (theme) => theme.spacing(20),
          }}
        >
          <Box
            sx={{
              ".Typewriter__wrapper": (theme) => ({
                maxWidth: (theme) => theme.spacing(47),
                fontSize: (theme) => ({
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  xs: (theme.typography as any).h6.fontSize,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  sm: (theme.typography as any).h5.fontSize,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  md: (theme.typography as any).h4.fontSize,
                }),
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: "0.1em",
                fontFamily: " -apple-system, BlinkMacSystemFont, sans-serif;",
                lineBreak: "word",
                color: theme.palette.text.secondary,
              }),
              ".Typewriter__cursor": {
                lineHeight: 1.5,
                fontSize: "1.5rem",
              },
            }}
          >
            <Typewriter
              options={{
                strings: texts,
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
                delay: 70,
              }}
            />
          </Box>
        </BrowserWrapper>
      </Section>
    </Container>
  );
};

export default About;
