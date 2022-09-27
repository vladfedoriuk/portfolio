import { BackgroundImageBox } from "@components/BackgroundImage/styled";
import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Technologies from "@components/Technologies";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave.svg">
      <Container maxWidth="xl" component="main">
        <Box sx={{ header: { justifyContent: "flex-start", ml: 0 } }}>
          <Heading />
        </Box>
        <Box sx={{ section: { mt: 1.5 } }}>
          <Contacts />
        </Box>
        <Box sx={{ section: { mt: 6 } }}>
          <Technologies />
        </Box>
      </Container>
    </BackgroundImageBox>
  );
};

export default Home;
