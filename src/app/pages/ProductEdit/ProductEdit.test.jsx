import React from "react";
import { render, screen } from "@testing-library/react";
import ProductEdit from ".";

// Utility function to check if all required sections are rendered
const sectionTitles = [
  "Product",
  "Photos",
  "Location",
  "Availability",
  "Price Preferences",
  "Sharing Preferences",
];

describe("ProductEdit Component", () => {
  // Check if each section title is present in the document
  sectionTitles.forEach((title) => {
    it(`renders ${title} section`, () => {
      render(<ProductEdit />);
      expect(screen.getByText(title, "i")).toBeInTheDocument();
    });
  });

  it("renders product details fields", () => {
    render(<ProductEdit />);
    expect(screen.getByText(/Product name/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
  });

  it("renders Photos section with Add new button", () => {
    render(<ProductEdit />);
    expect(screen.getByText(/Photos/i)).toBeInTheDocument();
    const addNewButtons = screen.getAllByText(/Add new/i);
    expect(addNewButtons.length).toBe(2);
  });

  it("renders Location field with address", () => {
    render(<ProductEdit />);
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Fillmore Street, Suite 1047, San Francisco/i),
    ).toBeInTheDocument();
    const CAText = screen.getAllByText(/CA/i);
    expect(CAText.length).toBe(3);
  });

  it("renders Availability section with Add new button", () => {
    render(<ProductEdit />);
    expect(screen.getByText(/Availability/i)).toBeInTheDocument();
    const addNewButtons = screen.getAllByText(/Add new/i);
    expect(addNewButtons.length).toBe(2);
    expect(screen.getByText(/Sat at Mon/i)).toBeInTheDocument();
    expect(screen.getByText(/Weekly, Monthly/i)).toBeInTheDocument();
  });

  it("renders Price Preferences section with Daily, Weekly, and Monthly prices", () => {
    render(<ProductEdit />);
    expect(screen.getByText(/Price Preferences/i)).toBeInTheDocument();
    expect(screen.getByText(/Daily/i)).toBeInTheDocument();
    expect(screen.getByText(/\$8/i)).toBeInTheDocument();
    const WeeklyText = screen.getAllByText(/Weekly/i);
    expect(WeeklyText.length).toBe(2);
    expect(screen.getByText(/\$33/i)).toBeInTheDocument();
    const MonthlyText = screen.getAllByText(/Monthly/i);
    expect(MonthlyText.length).toBe(2);
    expect(screen.getByText(/\$100/i)).toBeInTheDocument();
  });

  it("renders Sharing Preferences with toggle and communities selection", () => {
    render(<ProductEdit />);
    expect(screen.getByText(/Sharing Preferences/i)).toBeInTheDocument();
    expect(screen.getByText(/General Marketplace/i)).toBeInTheDocument();
    expect(screen.getByText(/Communities/i)).toBeInTheDocument();
    expect(screen.getByText(/2 selected/i)).toBeInTheDocument();
  });
});
