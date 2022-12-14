import { ComponentMeta, ComponentStory } from "@storybook/react";

import Contacts from "./Contacts";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Contacts",
  component: Contacts,
} as ComponentMeta<typeof Contacts>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Contacts> = (args) => (
  <Contacts {...args} />
);

export const ShortContacts = Template.bind({});

ShortContacts.args = {
  /*π The args you need here will depend on your component */
  variant: "short",
};

export const FullContact = Template.bind({});

FullContact.args = {
  variant: "full",
};
