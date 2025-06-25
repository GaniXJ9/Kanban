import { useState, type ChangeEvent } from "react";

function Input({
  label,
  type,
  error,
}: {
  label: string;
  type: string;
  error?: string;
}) {
  const [showLabel, setShowLabel] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
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
            ? "absolute text-xs font-medium  uppercase  px-5 pb-3 -top-4  transition-all duration-200 text-white"
            : "absolute text-xs font-medium  uppercase  px-5 pb-3 -top-0 opacity-0"
        }
      >
        {label}
      </span>
      <input
        value={value}
        type={type}
        className="w-full bg-[rgba(255,255,255,0.2)] rounded-md placeholder:uppercase  text-white outline-none py-4 px-5  shadow-md lg:hover:cursor-pointer"
        placeholder={showLabel ? "" : label}
        onFocus={showLableAction}
        onBlur={hideLableAction}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Input;
