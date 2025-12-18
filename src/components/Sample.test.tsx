import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sample from "./Sample";

describe("Testing Sample component", () => {
  beforeEach(() => {
    render(<Sample />);
  });

  it("renders the Sample heading", () => {
    const heading = screen.getByRole("heading", { name: /Sample/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description text", () => {
    const text = screen.getByTestId("desc");
    expect(text).toBeInTheDocument();
    expect(text.textContent).toMatch(/This is the sample component./);
  });
});