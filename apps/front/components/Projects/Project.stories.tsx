import { ComponentMeta, ComponentStory } from "@storybook/react";

import imageFile from "../../public/praktyki.png";
import Project from "./Project";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Project",
  component: Project,
} as ComponentMeta<typeof Project>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Project> = (args) => (
  <Project {...args} />
);

export const Default = Template.bind({});

Default.args = {
  /*π The args you need here will depend on your component */
  title: "Interact",
  description:
    "A piece of software for data analysis used to manage the physics experiment configurations.",
  image: imageFile.src,
  alt: "Interact - a Data Analysis tool",
};
