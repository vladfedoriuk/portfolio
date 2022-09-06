import Heading from "@components/Heading";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl" component="main">
      <Heading />
    </Container>
  );
};

export default Home;
