import type { FC, SVGProps } from "react";

interface ActionCardProps {
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

const ActionCard = ({ title, description, Icon, onClick }: ActionCardProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full px-3 py-2 lg:hover:cursor-pointer lg:hover:bg-slate-200 dark:lg:hover:bg-slate-500"
    >
      <p className="text-md font-medium py-1 flex gap-3 text-slate-600 dark:text-slate-200">
        <Icon /> {title}
      </p>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-200">
        {description}
      </span>
    </div>
  );
};

export default ActionCard;
