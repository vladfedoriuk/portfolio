import React from "react";

import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <SectionWrapper>
      <SectionHeader text={title} />
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;
