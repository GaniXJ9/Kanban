import clsx from "clsx";
import type { buttonProps } from "../../../features/types/common/buttonProps";

const PrimaryButton = ({
  text,
  size,
  fontSize,
  padding,
  margin,
  rounded,
  onClick,
  Icon,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        size,
        padding,
        margin || "mx-auto",
        `text-${fontSize}`,
        `rounded-${rounded}`,
        `border block rounded-md bg-[#07437A]
      lg:hover:bg-slate-400 dark:lg:hover:bg-slate-600
      text-white  dark:bg-slate-600 h-full
         lg:hover:text-slate-200
        dark:text-slate-200 
        font-normal lg:cursor-pointer transition-all duration-200
        `
      )}
    >
      {Icon && <Icon />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default PrimaryButton;
