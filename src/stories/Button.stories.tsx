import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PrimaryButton, SecondaryButton } from "../components/button/button";

export default {
  title: "Mars Exploration/Button",
  Component: PrimaryButton,

  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  value: "Submit",
  fontSize: "16px",
  radius: "5px",
  keepColor: true,
  type: "button",
  width: "10rem",
};
