import { useState } from "react";

function Input({ lable, type }: { lable: string; type: string }) {
  const [showLabel, setShowLable] = useState<boolean>(false);

  const showLableAction = () => {
    setShowLable(true);
  };
  const hideLableAction = () => {
    setShowLable(false);
  };
  return (
    <div className="w-full relative  m-2 px-7">
      <span
        className={
          showLabel
            ? "absolute text-xs font-medium  uppercase  pl-5 -top-4  transition-all duration-200 text-white"
            : "absolute text-xs font-medium  uppercase  pl-5 -top-0 opacity-0"
        }
      >
        {lable}
      </span>
      <input
        type={type}
        className="w-full bg-[rgba(255,255,255,0.2)] rounded-md uppercase  text-white outline-none py-4 px-6  shadow-md lg:hover:cursor-pointer"
        placeholder={showLabel ? "" : lable}
        onFocus={showLableAction}
        onBlur={hideLableAction}
      />
    </div>
  );
}

export default Input;
