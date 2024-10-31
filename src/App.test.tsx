import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app without crashing", () => {
  render(<App />);
  // Update or replace with an assertion relevant to your App's content
  const element = screen.getByText(/Edit Portable Barbecue Grill/i); // replace with text relevant to your app
  expect(element).toBeInTheDocument();
});
