import { useState } from "react";
import SettingsHorizontal from "../../../shared/icons/SettingsHorizontal";
import useTheme from "../../../shared/use-hook/useTheme";
import AddTaskBlock from "../AddTaskBlock";

import ColumnSettings from "./ColumnSettings";
import type { ColumnType } from "../../../features/register/types/BoardType";

const BoardColumn = ({ column }: { column: ColumnType }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [drag, setDrag] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleDraggedItem = (value: boolean) => {
    setDrag(value);
  };

  const toggleShowSettings = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <div
      draggable={true}
      onDrag={() => handleDraggedItem(true)}
      onDragEnd={() => handleDraggedItem(false)}
      className={`relative flex flex-col gap-3 w-80 h-fit rounded-md p-5  ${
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
          {column.columnName}
        </h1>
        <span
          onClick={toggleShowSettings}
          className={`lg:hover:cursor-pointer ${
            theme === "light"
              ? "text-slate-600 lg:hover:text-slate-800"
              : "text-slate-200 lg:hover:text-slate-500"
          }`}
        >
          <SettingsHorizontal />
        </span>
        <ColumnSettings showSettings={showSettings} id={column.id} />
      </div>

      <AddTaskBlock />
    </div>
  );
};

export default BoardColumn;
