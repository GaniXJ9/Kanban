import type { SVGProps } from "react";
import type { Size } from "../../../features/types/common/fontSize";

const DangerButton = ({
  size,
  fontSize,
  padding,
  onClick,
  rounded,
  Icon,
}: {
  size?: string;
  fontSize?: Size;
  padding?: string;
  rounded?: Size;
  onClick: () => void;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${size} ${padding}  text-${fontSize}
        rounded-${rounded}
        flex items-center justify-center
      lg:hover:bg-red-300 dark:lg:hover:bg-red-600 shadow-[0_0_0_1px_white_inset]
      text-white bg-red-500  font-normal lg:cursor-pointer  transition-all duration-200`}
    >
      <Icon />
    </button>
  );
};

export default DangerButton;
