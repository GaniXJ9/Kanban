import React, { type SVGProps } from "react";
import type { Size } from "../../../features/types/common/Size";
import clsx from "clsx";

type ButtonProps = {
  text?: string;
  size?: string;
  fontSize?: Size;
  padding?: string;
  rounded?: Size;
  onClick?: () => void;
  Icon?: React.FC<SVGProps<SVGSVGElement>> | null;
};

const Success = ({
  text,
  size,
  fontSize,
  padding,
  rounded,
  onClick,
  Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        size,
        padding,
        `text-${fontSize}`,
        `rounded-${rounded}`,
        ` text-slate-200 
        flex items-center justify-center
        bg-[#4cbf5b] dark:bg-[#50a953b1]
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

export default Success;
