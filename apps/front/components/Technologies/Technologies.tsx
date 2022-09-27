import SectionHeader from "@components/SectionHeader";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import DjangoSvg from "public/django.svg";
import FastAPISvg from "public/fastapi.svg";
import NextJsSvg from "public/next-js.svg";
import NuxtSvg from "public/nuxt.svg";
import PythonSvg from "public/python.svg";
import ReactSvg from "public/react.svg";
import TypescriptSvg from "public/typescript.svg";
import VueSvg from "public/vue.svg";

const Technologies = () => {
  return (
    <Container maxWidth="lg" component="section">
      <SectionHeader text="Tech Stack" />
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          ".MuiSvgIcon-root": {
            m: 2,
          },
        }}
      >
        <SvgIcon fontSize="large" component={PythonSvg} inheritViewBox />
        <SvgIcon fontSize="large" component={TypescriptSvg} inheritViewBox />
        <SvgIcon fontSize="large" component={DjangoSvg} inheritViewBox />
        <SvgIcon fontSize="large" component={FastAPISvg} inheritViewBox />
        <SvgIcon fontSize="large" component={ReactSvg} inheritViewBox />
        <SvgIcon fontSize="large" component={VueSvg} inheritViewBox />
        <SvgIcon fontSize="large" component={NextJsSvg} inheritViewBox />
        <SvgIcon fontSize="large" component={NuxtSvg} inheritViewBox />
      </Box>
    </Container>
  );
};

export default Technologies;
