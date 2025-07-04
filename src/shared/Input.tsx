import { useState, type ChangeEvent } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

const Input = ({
  label,
  type,
  error,
  register,
}: {
  label: string;
  type: string;
  error?: string;
  register: UseFormRegisterReturn;
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
    <div className="w-full relative  m-2 px-7">
      <span
        className={
          showLabel || value
            ? "absolute text-xs font-medium  uppercase  px-5 pb-3 -top-5  transition-all duration-200 text-white"
            : "absolute text-xs font-medium  uppercase  px-5 pb-3 -top-0 opacity-0"
        }
      >
        {label}
      </span>
      <input
        {...register}
        type={type}
        className={`${
          error ? "shadow-[0_0_1px_3px_#f43b3b]" : "shadow-md"
        } transition-all duration-200 w-full bg-[rgba(255,255,255,0.2)] rounded-md  text-xl  text-white outline-none py-4 px-5 lg:hover:cursor-pointer placeholder:uppercase placeholder:text-lg`}
        placeholder={showLabel ? "" : label}
        onFocus={showLableAction}
        onBlur={hideLableAction}
        onInput={onInput}
      />
      {error && (
        <p
          className={`absolute px-5  text-rose-600 uppercase text-xs mt-1 transition-all duration-200 font-medium ${
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
