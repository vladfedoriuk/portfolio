import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";

const Heading: React.FC = () => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      sx={{ justifyContent: "flex-start", ml: 0 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="left"
        color="text.primary"
        sx={{ fontWeight: "bold" }}
      >
        Hi,
      </Typography>
      <Typography
        variant="h3"
        align="left"
        color="primary.main"
        sx={{ fontWeight: "bold" }}
        component="p"
      >
        <Typography
          variant="h3"
          component="span"
          color="text.primary"
          sx={{ fontWeight: "bold" }}
        >
          {"I am "}
        </Typography>
        Vladyslav Fedoriuk
      </Typography>
      <Typography
        variant="h5"
        align="left"
        color="secondary.main"
        sx={{ fontWeight: "bold" }}
        component="p"
      >
        a full-stack web developer.
      </Typography>
    </Container>
  );
};

export default Heading;
