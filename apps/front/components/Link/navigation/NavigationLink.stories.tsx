import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavigationLink from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Navigation Link",
  component: NavigationLink,
} as ComponentMeta<typeof NavigationLink>;

const Template: ComponentStory<typeof NavigationLink> = (args) => (
  <NavigationLink {...args}>Navigation Link</NavigationLink>
);

export const Default = Template.bind({});

Default.args = {
  href: "/",
};
