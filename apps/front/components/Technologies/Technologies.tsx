import Section from "@components/Section";
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
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring" },
      y: { type: "spring", stiffness: 400, damping: 10 },
      duration: 0.8,
    },
  },
};

const Technologies = () => {
  return (
    <Container
      maxWidth="lg"
      component={motion.section}
      variants={container}
      initial="hidden"
      animate="show"
      sx={{
        ".MuiSvgIcon-root": {
          m: 2,
        },
      }}
    >
      <Section title="Tech Stack">
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={PythonSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={TypescriptSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={DjangoSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={FastAPISvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={ReactSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={VueSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={NextJsSvg} inheritViewBox />
        </Box>
        <Box component={motion.div} variants={item} whileHover={{ y: -10 }}>
          <SvgIcon fontSize="large" component={NuxtSvg} inheritViewBox />
        </Box>
      </Section>
    </Container>
  );
};

export default Technologies;
