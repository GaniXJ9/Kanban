import type { fontSize } from "../../../features/types/common/fontSize";

const PrimaryButton = ({
  text,
  size,
  fontSize,
  padding,
  onClick,
}: {
  text: string;
  size?: string;
  fontSize?: fontSize;
  padding: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${size} ${padding} h-full text-${fontSize}
      border mx-auto block
      lg:hover:bg-slate-400 dark:lg:hover:bg-slate-600
      text-white bg-slate-600 dark:bg-slate-800 font-normal lg:cursor-pointer rounded-md transition-all duration-200`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
