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
  ...props
}: buttonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        size,
        padding,
        `text-${fontSize}`,
        `rounded-${rounded}`,
        ` dark:text-slate-300 
        dark:lg:hover:bg-[rgb(34,39,43)] 
        text-start 
    
        font-medium lg:cursor-pointer transition-all duration-200`
      )}
    >
      {Icon && <Icon data-testid="btn-icon-id" />}
      {text && <span data-testid="btn-text-id">{text}</span>}
    </button>
  );
};

export default SecondaryButton;

//  bg-slate-200 dark:bg-slate-600
//         lg:hover:bg-slate-600 lg:hover:text-slate-200
//         dark:text-slate-200 dark:lg:hover:bg-[#373737]
