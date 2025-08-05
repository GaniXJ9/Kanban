import { render, screen } from "@testing-library/react";
import Success from "./Success";
import "@testing-library/jest-dom";

const MockIcon = () => <svg data-testid="btn-icon-id" />;

describe("Success", () => {
  const text = "Success!";

  it("renders text if it given by props", () => {
    render(<Success text={text} />);

    const buttonText = screen.getByText(text);

    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveTextContent(text);
  });

  it("does not render text if it is not given by props", () => {
    render(<Success />);

    const buttonText = screen.queryByText(text);

    expect(buttonText).not.toBeInTheDocument();
  });

  it("renders Icon if it is given by props", () => {
    render(<Success Icon={MockIcon} />);

    const buttonIcon = screen.getByTestId("btn-icon-id");

    expect(buttonIcon).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();

    render(<Success text={text} onClick={handleClick} />);

    const button = screen.getByRole("button");

    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
