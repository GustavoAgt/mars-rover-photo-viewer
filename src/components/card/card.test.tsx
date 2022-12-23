import React from "react";
import { render, screen } from "@testing-library/react";
import { URL_MOCK } from "../../__test__/utils/contants";
import Card from "./card";

test("render rover card", () => {
  render(
    <Card
      img={URL_MOCK}
      bookmarked={true}
      camFullName="Mast Camera"
      camaraName="MAST"
      name="Curiosity"
      earthDatePic="2015-05-30"
      landingDate="2012-08-06"
      launchDate="2011-11-26"
      onBookmark={() => {}}
    />
  );

  const card = screen.getByRole("presentation")
  expect(card).toBeInTheDocument();
});
