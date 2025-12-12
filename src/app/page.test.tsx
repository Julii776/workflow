import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Testing main page", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("renders the main element with correct classes", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("flex", "min-h-screen", "flex-col", "items-center", "p-24");
  });

  it("renders Home component", () => {
    const homeHeading = screen.getByText(/Home/i);
    expect(homeHeading).toBeInTheDocument();
  });

  it("renders Sample component", () => {
    const sampleHeading = screen.getByRole("heading", { name: /Sample/i, level: 1 });
    expect(sampleHeading).toBeInTheDocument();
  });

  it("renders Notes component", () => {
    const notesHeading = screen.getByText(/Notes App/i);
    expect(notesHeading).toBeInTheDocument();
  });

  it("renders components in correct order", () => {
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });
});
