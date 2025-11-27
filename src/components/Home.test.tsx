import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Testing Home component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a heading", () => {
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  });

  it("renders a heading inside h1", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("Test the description", () => {
    const text = screen.getByTestId("desc");
    expect(text).toBeInTheDocument();
    expect(text.textContent).toMatch(/description/);
  });
});