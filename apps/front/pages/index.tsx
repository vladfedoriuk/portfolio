import { BackgroundImageBox } from "@components/BackgroundImage/styled";
import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Technologies from "@components/Technologies";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave.svg">
      <Container maxWidth="xl" component="main">
        <Heading />
        <Contacts marginTop={1.5} />
        <Technologies />
      </Container>
    </BackgroundImageBox>
  );
};

export default Home;
