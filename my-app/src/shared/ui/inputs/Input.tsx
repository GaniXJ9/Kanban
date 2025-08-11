import { useState, type ChangeEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { Size } from "../../../features/types/common/Size";
import clsx from "clsx";

const Input = ({
  label,
  type,
  error,
  register,
  fontSize,
}: {
  label: string;
  type: string;
  error?: string;
  register: UseFormRegisterReturn;
  fontSize: Size;
}) => {
  const [showLabel, setShowLabel] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const showLableAction = () => {
    setShowLabel(true);
  };
  const hideLableAction = () => {
    setShowLabel(false);
  };

  return (
    <div className="w-full  relative  lg:m-2 lg:px-7">
      <span
        className={clsx(
          showLabel || value ? "-top-5 opacity-100" : "-top-0 opacity-0",
          "absolute text-xs  uppercase  pb-3 transition-all duration-200 text-slate-600 dark:text-slate-200"
        )}
      >
        {label}
      </span>
      <input
        {...register}
        className={clsx(
          `text-${fontSize}`,
          error
            ? "border-b-rose-600 dark:border-b-rose-800"
            : "border-slate-600 dark:border-slate-400",
          "w-full border-b   transition-all duration-200 lg:text-xl text-slate-600 dark:text-slate-200 outline-none py-2  lg:py-0.5  lg:hover:cursor-pointer placeholder:uppercase placeholder:text-sm lg:placeholder:text-md"
        )}
        type={type}
        placeholder={showLabel ? "" : label}
        onFocus={showLableAction}
        onBlur={hideLableAction}
        onInput={onInput}
      />
      {error && (
        <p
          className={`absolute  text-rose-600 dark:text-rose-800  text-xs mt-1 transition-all duration-200  ${
            error ? "-bottom-6 opacity-100" : "bottom-0 opacity-0"
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
