import SectionHeader from "@components/SectionHeader";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import { motion } from "framer-motion";
import DjangoSvg from "public/django.svg";
import FastAPISvg from "public/fastapi.svg";
import NextJsSvg from "public/next-js.svg";
import NuxtSvg from "public/nuxt.svg";
import PythonSvg from "public/python.svg";
import ReactSvg from "public/react.svg";
import TypescriptSvg from "public/typescript.svg";
import VueSvg from "public/vue.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Technologies = () => {
  return (
    <Container
      maxWidth="lg"
      component={motion.section}
      variants={container}
      initial="hidden"
      animate="show"
    >
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
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={PythonSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={TypescriptSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={DjangoSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={FastAPISvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={ReactSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={VueSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={NextJsSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item}>
          <SvgIcon fontSize="large" component={NuxtSvg} inheritViewBox />
        </Box>
      </Box>
    </Container>
  );
};

export default Technologies;
