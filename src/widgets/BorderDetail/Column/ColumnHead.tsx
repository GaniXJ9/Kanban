import { useState } from "react";
import useStore from "../../../app/store";
import SettingsHorizontal from "../../../shared/icons/SettingsHorizontal";
import ColumnSettings from "./ColumnSettings";
import type { ColumnType } from "../../../features/register/types/ColumnType";

const ColumnHead = ({ column }: { column: ColumnType }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const { theme } = useStore();

  const toggleShowSettings = () => {
    setShowSettings((prev) => !prev);
  };
  return (
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
  );
};

export default ColumnHead;
