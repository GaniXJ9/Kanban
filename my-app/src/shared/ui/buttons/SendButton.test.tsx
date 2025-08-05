import { render, screen } from "@testing-library/react";
import SendButton from "./SendButton";
import "@testing-library/jest-dom";

describe("SendButton", () => {
  const text = "Send";

  it("renders text if it given by props", () => {
    render(<SendButton text={text} onClick={() => {}} />);

    const buttonText = screen.getByText(text);

    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveTextContent(text);
  });

  it("does not render text if it is not given by props", () => {
    render(<SendButton onClick={() => {}} />);

    const buttonText = screen.queryByText(text);

    expect(buttonText).not.toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();

    render(<SendButton text={text} onClick={handleClick} />);

    const button = screen.getByRole("button");

    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("always renders SendIcon", () => {
    render(<SendButton text={text} onClick={() => {}} />);

    const icon = screen.getByTestId("btn-icon-id");

    expect(icon).toBeInTheDocument();
  });
});
