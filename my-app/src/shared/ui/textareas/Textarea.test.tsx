import { render, screen } from "@testing-library/react";
import Textarea from "./Textarea";
import { fireEvent } from "@testing-library/react";

describe("Textarea", () => {
  const value = "Test value";
  const setValue = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  it("call onBlure function when blurred", () => {
    render(
      <Textarea
        value={value}
        setValue={setValue}
        onBlur={onBlur}
        required={false}
      />
    );

    const textarea = screen.getByTestId("test-textarea-id");

    fireEvent.blur(textarea);

    expect(onBlur).toHaveBeenCalled();
  });

  it("call onFocus function when blurred", () => {
    render(
      <Textarea
        value={value}
        setValue={setValue}
        onFocus={onFocus}
        required={false}
      />
    );

    const textarea = screen.getByTestId("test-textarea-id");

    fireEvent.focus(textarea);

    expect(onFocus).toHaveBeenCalled();
  });

  it("call onChange function when value changed", () => {
    render(<Textarea value={value} setValue={setValue} required={false} />);

    const textarea = screen.getByTestId("test-textarea-id");

    fireEvent.change(textarea, { target: { value: "New value" } });

    expect(setValue).toHaveBeenCalledWith("New value");
  });
});
