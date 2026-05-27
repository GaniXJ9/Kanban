import { fireEvent, render, screen } from "@testing-library/react";
import AddNewColumn from "./AddNewColumn";
import "@testing-library/jest-dom";

describe("AddNewColumn component", () => {
  it("renders the form and input field", () => {
    render(<AddNewColumn toggleShowInputColumn={() => {}} />);
    expect(screen.getByTestId("add-new-column-form")).toBeInTheDocument();
    expect(screen.getByTestId("form-input-id")).toBeInTheDocument();
  });

  it("it closes input when close button is clicked", () => {
    const toggleShowInputColumn = jest.fn();

    render(<AddNewColumn toggleShowInputColumn={toggleShowInputColumn} />);

    const closeButton = screen.getByTestId("close-button-id");

    fireEvent.click(closeButton);

    expect(toggleShowInputColumn).toHaveBeenCalledTimes(1);
  });

  it("shows validation error when input is empty", async () => {
    render(<AddNewColumn toggleShowInputColumn={() => {}} />);
    const form = screen.getByTestId("add-new-column-form");

    fireEvent.submit(form);

    expect(await screen.findByText(/must be filled!/i)).toBeInTheDocument();
  });
});
