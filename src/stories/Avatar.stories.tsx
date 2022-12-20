import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "../components/avatar/avatar";

export default {
  title: "Mars Exploration/Avatar",
  component: Avatar,

  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },

  argTypes: {
    img: { description: "circular avatar for rovers" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Main = Template.bind({});

Main.args = {
  img: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80",
};