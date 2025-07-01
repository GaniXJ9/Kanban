import type React from "react";
import useStore from "../../../app/store";
import type { SVGProps } from "react";

function CreateButton({
  title,
  subtitle,
  Icon,
  onClick,
}: {
  title: string;
  subtitle: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}) {
  const { theme } = useStore();
  return (
    <div
      onClick={onClick}
      className={`w-full px-3 py-2 lg:hover:cursor-pointer ${
        theme === "light" ? "lg:hover:bg-slate-200" : "lg:hover:bg-slate-500"
      }`}
    >
      <p
        className={`text-md font-medium py-1 flex gap-3  ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        }`}
      >
        <Icon /> {title}
      </p>
      <span
        className={`text-xs font-medium ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        }`}
      >
        {subtitle}
      </span>
    </div>
  );
}

export default CreateButton;
