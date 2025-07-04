import { useState } from "react";
import SettingsHorizontal from "../../shared/icons/SettingsHorizontal";
import useTheme from "../../shared/use-hook/useTheme";
import AddTaskBlock from "./AddTaskBlock";

const TaskStatusBlock = ({ taskName }: { taskName: string }) => {
  const [drag, setDrag] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleDraggedItem = (value: boolean) => {
    setDrag(value);
  };
  return (
    <div
      draggable={true}
      onDrag={() => handleDraggedItem(true)}
      onDragEnd={() => handleDraggedItem(false)}
      className={`flex flex-col gap-3 w-80 h-fit rounded-md p-5  ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      } ${drag && "opacity-50"}
      `}
    >
      <div className="flex justify-between items-center">
        <h1
          className={`font-medium text-sm uppercase ${
            theme === "light" ? "text-slate-600" : "text-slate-200"
          }`}
        >
          {taskName}
        </h1>
        <span
          className={`lg:hover:cursor-pointer ${
            theme === "light" ? "text-slate-600" : "text-slate-200"
          }`}
        >
          <SettingsHorizontal />
        </span>
      </div>

      <AddTaskBlock />
    </div>
  );
};

export default TaskStatusBlock;
