import { ComponentMeta, ComponentStory } from "@storybook/react";

import SectionHeader from "./SectionHeader";

export default {
  title: "SectionHeader",
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <SectionHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  /*👇 The args you need here will depend on your component */
  text: "This is a header",
};
