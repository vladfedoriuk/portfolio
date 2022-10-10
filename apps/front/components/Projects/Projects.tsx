import Section from "@components/Section";
import Container from "@mui/system/Container";

import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      slug: "projects-interact",
      title: "Interact",
      description:
        "A piece of software for data analysis used to manage the physics experiment configurations.",
      image: "/praktyki.png",
      alt: "Interact - a Data Analysis tool",
    },
  ];
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{
        ".MuiCard-root": {
          mb: 4,
        },
      }}
    >
      <Section title="Projects">
        {projects.map(({ slug, ...rest }) => (
          <Project key={slug} {...rest} />
        ))}
      </Section>
    </Container>
  );
};

export default Projects;
