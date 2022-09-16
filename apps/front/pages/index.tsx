import Contacts from "@components/Contacts";
import Heading from "@components/Heading";
import Container from "@mui/system/Container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl" component="main">
      <Heading sx={{ mt: 2 }} />
      <Contacts marginTop={2} />
    </Container>
  );
};

export default Home;
