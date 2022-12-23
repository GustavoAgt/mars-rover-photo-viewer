import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

test("render header logo for mobile", () => {
  render(<Header />);
  const header = screen.getByRole("banner", { hidden: true });
  expect(header).not.toBeVisible();
});
