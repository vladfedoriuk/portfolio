import SectionHeader from "@components/SectionHeader";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";

import Project from "./Project";

const projects = [
  {
    slug: "interact",
    title: "Interact",
    description:
      "A piece of software for data analysis used to manage the physics experiment configurations.",
    image: "/praktyki.png",
    alt: "Interact - a Data Analysis tool",
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg" component="section">
      <SectionHeader text="Projects" />
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map(({ slug, ...rest }) => (
          <Project key={slug} {...rest} />
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
