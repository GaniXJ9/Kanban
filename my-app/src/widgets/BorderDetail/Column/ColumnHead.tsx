import { useState, type ChangeEvent } from "react";
import useStore from "../../../app/store";
// import SettingsHorizontal from "../../../shared/icons/SettingsHorizontal";
// import ColumnSettings from "./ColumnSettings";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import ConfirmIcon from "../../../shared/icons/ConfirmIcon";
import useBoardStore from "../../../app/store/board/boardStore";
import DeleteIcon from "../../../shared/icons/DeleteIcon";

const ColumnHead = ({ column }: { column: ColumnType }) => {
  const [value, setValue] = useState<string>(column.columnName);
  const [focused, setFocused] = useState<boolean>(false);
  // const [showSettings, setShowSettings] = useState<boolean>(false);
  const { theme } = useStore();
  const { currentBoard, updateColumn, deleteColumn } = useBoardStore();

  // const toggleShowSettings = () => {
  //   setShowSettings((prev) => !prev);
  // };

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUpdateColumn = () => {
    if (currentBoard) {
      const newColumn: ColumnType = { ...column, columnName: value };
      updateColumn(column.id, currentBoard, newColumn);
    }
  };

  const handleDeleteColumn = () => {
    if (currentBoard) {
      deleteColumn(column.id);
    }
  };
  return (
    <div className="flex justify-between items-center gap-1">
      <div className="relative w-full">
        <span
          onClick={handleUpdateColumn}
          className={`absolute top-0 right-1  transition-all duration-200 flex items-center justify-center h-full lg:hover:text-slate-400 lg:hover:cursor-pointer  ${
            focused ? "opacity-100 translate-x-0" : " opacity-0 translate-x-2"
          }
          ${theme === "light" ? "text-slate-600 " : "text-slate-200 "}
          `}
        >
          <ConfirmIcon />
        </span>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={value || column.columnName}
          className={`font-medium text-sm uppercase py-1 w-full px-1 ${
            theme === "light"
              ? "text-slate-600 placeholder:text-slate-600"
              : "text-slate-200 placeholder:text-slate-200 "
          }`}
        />
      </div>

      {/* <span
        onClick={toggleShowSettings}
        className={`lg:hover:cursor-pointer ${
          theme === "light"
            ? "text-slate-600 lg:hover:text-slate-800"
            : "text-slate-200 lg:hover:text-slate-500"
        }`}
      >
        <SettingsHorizontal />
      </span> */}

      <button
        onClick={handleDeleteColumn}
        className={`block m-1 p-2 text-center rounded-md  lg:hover:cursor-pointer  transition-all duration-200 ${
          theme === "light"
            ? "text-slate-600 lg:hover:bg-slate-600 lg:hover:text-slate-200"
            : "text-slate-200 lg:hover:bg-[#373737] lg:hover:text-slate-600"
        }`}
      >
        <DeleteIcon />
      </button>
      {/* <ColumnSettings showSettings={showSettings} id={column.id} /> */}
    </div>
  );
};

export default ColumnHead;
