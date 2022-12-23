import React from "react";
import { render, screen } from "@testing-library/react";
import BottomNav from "./bottom-nav.component";
import { BrowserRouter as Router } from "react-router-dom";

test("render avatar with rover pic", () => {
  render(
    <Router>
      <BottomNav />
    </Router>
  );
  const avatar = screen.getByText("Home");
  expect(avatar).toBeInTheDocument();
});
