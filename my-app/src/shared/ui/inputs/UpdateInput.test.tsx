import { fireEvent, render, screen } from "@testing-library/react";
import UpdateInput from "./UpdateInput";
import "@testing-library/jest-dom";

describe("UpdateInput", () => {
  const handleUpdateMock = jest.fn();
  const setValueMock = jest.fn();
  const defaultValue = "initial value";

  it("renders UpdateInput component with default value", () => {
    render(
      <UpdateInput
        defFalue={defaultValue}
        handleUpdate={handleUpdateMock}
        setValue={setValueMock}
      />
    );

    expect(screen.getByDisplayValue(defaultValue)).toBeInTheDocument();
  });

  it("show ConfirmIcon on focus", () => {
    render(
      <UpdateInput
        defFalue={defaultValue}
        handleUpdate={handleUpdateMock}
        setValue={setValueMock}
      />
    );
    const input = screen.getByTestId("test-input");
    const icon = screen.getByTestId("confirm-icon");

    fireEvent.focus(input);
    expect(icon).toBeVisible();
  });

  it("hides ConfirmIcon on blur", () => {
    render(
      <UpdateInput
        defFalue={defaultValue}
        handleUpdate={handleUpdateMock}
        setValue={setValueMock}
      />
    );

    const input = screen.getByTestId("test-input");
    const icon = screen.getByTestId("confirm-icon");

    fireEvent.blur(input);
    expect(icon).toHaveClass("opacity-0");
  });

  it("call HandleUpdate function on blur", () => {
    render(
      <UpdateInput
        defFalue={defaultValue}
        handleUpdate={handleUpdateMock}
        setValue={setValueMock}
      />
    );

    const input = screen.getByTestId("test-input");

    fireEvent.blur(input);
    expect(handleUpdateMock).toHaveBeenCalled();
  });

  it("calls setValue on change", () => {
    render(
      <UpdateInput
        defFalue={defaultValue}
        handleUpdate={handleUpdateMock}
        setValue={setValueMock}
      />
    );

    const input = screen.getByDisplayValue(defaultValue);
    fireEvent.change(input, { target: { value: "updated value" } });

    expect(setValueMock).toHaveBeenCalledWith("updated value");
  });
});
