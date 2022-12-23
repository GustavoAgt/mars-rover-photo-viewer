import React from "react";

import { render, screen } from "@testing-library/react";
import { PrimaryButton, SecondaryButton } from "./button";

describe("Test primary and secondary buttons", () => {
  test("render primary button", () => {
    render(<PrimaryButton value="Primary Button" />);
    const primary = screen.getByRole("button", { name: /Primary Button/i });
    expect(primary).toBeVisible();
    expect(primary).to;
  });

  test("render primary button", () => {
    render(<SecondaryButton value="Secondary Button" />);
    const primary = screen.getByRole("button", { name: /Secondary Button/i });
    expect(primary).toBeVisible();
  });

  test("render disabled button", () => {
    render(<SecondaryButton disabled={true} value="Disabled Button" />);
    const disabledBtn = screen.getByRole("button", {
      name: /Disabled Button/i,
    });
    expect(disabledBtn).toBeVisible();
    expect(disabledBtn).toBeDisabled();
  });
});
