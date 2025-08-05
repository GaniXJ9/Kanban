import clsx from "clsx";
import type { buttonProps } from "../../../features/types/common/buttonProps";

const SecondaryButton = ({
  text,
  size,
  fontSize,
  padding,
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
        `text-${fontSize}`,
        `rounded-${rounded}`,
        ` text-slate-600 
        text-start
        bg-slate-200 dark:bg-slate-600
        lg:hover:bg-slate-600 lg:hover:text-slate-200
        dark:text-slate-200 dark:lg:hover:bg-[#373737]
        font-normal lg:cursor-pointer transition-all duration-200`
      )}
    >
      {Icon && <Icon />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default SecondaryButton;
