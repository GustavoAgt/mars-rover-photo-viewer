import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../components/card/card";

export default {
  title: "Mars Exploration/Card",
  Component: Card,

  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const StoryCard = Template.bind({});

StoryCard.args = {
  bookmarked: false,
  camFullName: "Mast Camera",
  camaraName: "MAST",
  launchDate: " 2011-11-26",
  landingDate: "2012-08-06",
  earthDatePic: "2015-05-30",
  name: "Curiosity",
  img: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630840503644E01_DXXX.jpg",
};
