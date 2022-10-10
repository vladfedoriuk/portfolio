import Box from "@mui/system/Box";
import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ mt: 12 }}>{children}</Box>;
};

export default SectionWrapper;
