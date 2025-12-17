import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sample from "./Sample";

describe("Testing Sample component", () => {
  beforeEach(() => {
    render(<Sample />);
  });

  it("renders the Sample heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Sample/i);
  });

  it("renders the description paragraph", () => {
    const desc = screen.getByTestId("desc");
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveTextContent(/This is the sample component./i);
  });
});