import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sample from "./Sample";

describe("Testing Sample component", () => {
  beforeEach(() => {
    render(<Sample />);
  });

  it("renders a heading inside h1", () => {
    const text = screen.getByRole("heading", { level: 1 });
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe("Sample");
  });

  it("Test the description", () => {
    const text = screen.getByTestId("desc");
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe("This is the sample component.");
  });
});
