import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Notes";
import Notes from "./Notes";

describe("Testing Notes component", () => {
  beforeEach(() => {
    render(<Notes />);
  });

  it("renders a title", () => {
    const text = screen.getByText(/Notes App/i);
    expect(text).toBeInTheDocument();
  });

  it("Test button is disabled", () => {
    {
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    }
  });

  it("Fill the input to enable  button", () => {
    {
      const input = screen.getByPlaceholderText("Write a note...");
      fireEvent.change(input, { target: { value: "Test" } });

      const button = screen.getByRole("button");
      expect(button).not.toBeDisabled();
    }
  });
});
