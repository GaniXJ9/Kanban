import { render, screen } from "@testing-library/react";
import DangerButton from "./DangerButton";
import "@testing-library/jest-dom";
import DeleteIcon from "../../icons/DeleteIcon";

describe("DangerButton", () => {
  const text = "Delete";

  it("renders text if it given by props", () => {
    render(<DangerButton text={text} onClick={() => {}} />);

    const buttonText = screen.getByTestId("btn-text-id");

    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveTextContent(text);
  });

  it("does not render text if it is not given by props", () => {
    render(<DangerButton onClick={() => {}} />);

    const buttonText = screen.queryByTestId("btn-text-id");

    expect(buttonText).not.toBeInTheDocument();
  });

  it("renders Icon if it is given by props", () => {
    render(<DangerButton Icon={DeleteIcon} />);

    const buttonIcon = screen.getByTestId("btn-icon-id");

    expect(buttonIcon).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<DangerButton text={text} onClick={handleClick} />);

    const button = screen.getByRole("button");
    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
