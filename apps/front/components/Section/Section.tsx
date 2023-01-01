import Box from "@mui/system/Box";

import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <Box sx={{ mt: 4 }}>
      <SectionHeader text={title} />
      <SectionContent>{children}</SectionContent>
    </Box>
  );
};

export default Section;
