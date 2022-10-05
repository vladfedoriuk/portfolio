import { ComponentMeta, ComponentStory } from "@storybook/react";

import AppBar from "./AppBar";

export default {
  title: "AppBar",
  component: AppBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

export const Default: ComponentStory<typeof AppBar> = () => <AppBar />;
