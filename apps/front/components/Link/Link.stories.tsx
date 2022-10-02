import { ComponentMeta, ComponentStory } from "@storybook/react";

import Link from "./Link";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);

export const Default = Template.bind({});

Default.args = {
  href: "https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript",
};

export const ButtonSpaced = Template.bind({});

ButtonSpaced.args = {
  href: "/",
  variant: "button-spaced",
};
