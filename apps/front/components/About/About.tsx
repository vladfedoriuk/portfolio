import Section from "@components/Section";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import Typewriter from "typewriter-effect";

const About = ({ texts }: { texts: string[] }) => {
  return (
    <Container maxWidth="xs" component="section" sx={{ minHeight: "9em" }}>
      <Section title="About me">
        <Box
          sx={{
            ".Typewriter__wrapper": (theme) => ({
              fontSize: "1.5rem",
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "0.1em",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
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
      </Section>
    </Container>
  );
};

export default About;
