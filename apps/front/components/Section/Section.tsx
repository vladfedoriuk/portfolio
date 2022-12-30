import Box from "@mui/system/Box";

import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";

interface SectionProps {
  title: string;
  height?: string;
  children: React.ReactNode;
}
const Section = ({ title, height = "50vh", children }: SectionProps) => {
  return (
    <Box sx={{ mt: 2, height }}>
      <SectionHeader text={title} />
      <SectionContent>{children}</SectionContent>
    </Box>
  );
};

export default Section;
