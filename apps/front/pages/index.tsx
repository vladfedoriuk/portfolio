import { BackgroundImageBox } from "@components/BackgroundImage/styled";
import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BackgroundImageBox imagePath="/wave.svg">
      <Container maxWidth="xl" component="main">
        <Heading />
        <Contacts marginTop={2} />
      </Container>
    </BackgroundImageBox>
  );
};

export default Home;
