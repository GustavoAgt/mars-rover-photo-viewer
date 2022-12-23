import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { URL_MOCK } from "../../__test__/utils/contants";
import SideBar from "./sidebar";

test("render sidebar", () => {
  render(
    <Router>
      <SideBar img={URL_MOCK} />
    </Router>
  );

  expect(screen.getByRole("button", { name: /Home/i })).toBeVisible();
  expect(screen.getByRole("button", { name: /Bookmarks/i })).toBeVisible();
});
