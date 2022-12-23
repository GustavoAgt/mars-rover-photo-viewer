import { render, screen } from "@testing-library/react";
import React from "react";
import { URL_MOCK } from "../../__test__/utils/contants";
import Logo from "./logo";

test("render logo", () => {
  render(<Logo src={URL_MOCK} width="52" height="52" />);
  const logo = screen.getByRole("img", {
    name: /mars-rover-logo/i,
    hidden: true,
  });

  expect(logo).toBeVisible();
  expect(logo).toHaveAttribute("alt", "mars-rover-logo");
  expect(logo).toHaveAttribute("src", URL_MOCK);
});
