import clsx from "clsx";
import type { buttonProps } from "../../../features/types/common/buttonProps";

const DangerButton = ({
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
        ` 
        flex items-center justify-center
        bg-red-500 
        lg:hover:bg-red-300 dark:lg:hover:bg-red-600
       text-slate-200 
        font-normal lg:cursor-pointer transition-all duration-200`
      )}
    >
      {Icon && <Icon data-testid="btn-icon-id" />}
      {text && <span data-testid="btn-text-id">{text}</span>}
    </button>
  );
};

export default DangerButton;
