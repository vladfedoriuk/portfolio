import { ComponentMeta, ComponentStory } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = () => <Heading />;
