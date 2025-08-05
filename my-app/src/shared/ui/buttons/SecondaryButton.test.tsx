import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteIcon from "../../icons/DeleteIcon";
import SecondaryButton from "./SecondaryButton";

describe("SecondaryButton", () => {
  const text = "Delete";

  it("renders text if it given by props", () => {
    render(<SecondaryButton text={text} />);

    const buttonText = screen.getByTestId("btn-text-id");

    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveTextContent(text);
  });

  it("does not render text if it is not given by props", () => {
    render(<SecondaryButton />);

    const buttonText = screen.queryByTestId("btn-text-id");

    expect(buttonText).not.toBeInTheDocument();
  });

  it("renders Icon if it is given by props", () => {
    render(<SecondaryButton Icon={DeleteIcon} />);

    const buttonIcon = screen.getByTestId("btn-icon-id");

    expect(buttonIcon).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();

    render(<SecondaryButton text={text} onClick={handleClick} />);

    const button = screen.getByRole("button");

    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
