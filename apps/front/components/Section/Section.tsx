import React from "react";

import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <SectionHeader text={title} />
      <SectionContent>{children}</SectionContent>
    </>
  );
};

export default Section;
