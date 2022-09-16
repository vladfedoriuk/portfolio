import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import Container, { ContainerProps } from "@mui/system/Container";

import { LinearGradientTypography } from "./styled";

const Heading: React.FC<ContainerProps> = (props) => {
  const theme = useTheme();
  return (
    <Container
      {...props}
      disableGutters
      maxWidth="sm"
      sx={{ justifyContent: "flex-start", ml: 0, ...(props.sx ?? {}) }}
    >
      <LinearGradientTypography
        component="h1"
        variant="h2"
        align="left"
        color="text.primary"
        sx={{
          fontWeight: "bold",
        }}
        gradientColors={{
          colorFrom: theme.palette.primary.main,
          colorTo: theme.palette.text.primary,
        }}
      >
        Hi,
      </LinearGradientTypography>
      <LinearGradientTypography
        variant="h3"
        align="left"
        color="primary.main"
        sx={{ fontWeight: "bold" }}
        component="p"
        gradientColors={{
          colorFrom: theme.palette.secondary.main,
          colorTo: theme.palette.primary.main,
        }}
      >
        <LinearGradientTypography
          variant="h3"
          component="span"
          color="text.primary"
          sx={{ fontWeight: "bold" }}
          gradientColors={{
            colorFrom: theme.palette.primary.main,
            colorTo: theme.palette.text.primary,
          }}
        >
          {"I am "}
        </LinearGradientTypography>
        Vladyslav Fedoriuk
      </LinearGradientTypography>
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
