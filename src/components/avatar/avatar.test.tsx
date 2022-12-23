import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./avatar";

import { URL_MOCK } from "../../__test__/utils/contants";

test("render avatar with rover pic", () => {
  render(<Avatar img={URL_MOCK} />);
  const avatar = screen.getByRole("img");
  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveAttribute("alt", "rover avatar");
  expect(avatar).toHaveAttribute("src", URL_MOCK);
});
