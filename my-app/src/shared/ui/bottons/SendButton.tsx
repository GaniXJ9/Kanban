import clsx from "clsx";
import type { buttonProps } from "../../../features/types/common/buttonProps";
import SendIcon from "../../icons/SendIcon";

const SendButton = ({
  text,
  size,
  fontSize,
  padding,
  rounded,
  onClick,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        size,
        padding,
        `text-${fontSize}`,
        `rounded-${rounded}`,
        `border-2 bg-slate-500 text-slate-200 lg:hover:bg-slate-200 lg:hover:border-slate-500 lg:hover:text-slate-500
        dark:bg-slate-700 dark:lg:hover:bg-slate-500 dark:lg:hover:text-slate-200
        font-normal lg:cursor-pointer transition-all duration-200`
      )}
    >
      <SendIcon />
      {text && <span>{text}</span>}
    </button>
  );
};

export default SendButton;
