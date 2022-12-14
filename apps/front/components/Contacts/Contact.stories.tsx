import GitHubIcon from "@mui/icons-material/GitHub";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Contact } from "./Contact";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Contact",
  component: Contact,
} as ComponentMeta<typeof Contact>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const ShortContact = Template.bind({});

ShortContact.args = {
  /*π The args you need here will depend on your component */
  variant: "short",
  icon: <GitHubIcon fontSize="medium" />,
  text: "vladfedoriuk",
  link: "https://github.com/vladfedoriuk",
};

export const FullContact = Template.bind({});

FullContact.args = {
  variant: "full",
  icon: <GitHubIcon fontSize="medium" />,
  text: "vladfedoriuk",
  link: "https://github.com/vladfedoriuk",
};
