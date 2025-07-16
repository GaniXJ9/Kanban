import { useState } from "react";
import useStore from "../../../app/store";

import type { ColumnType } from "../../../features/register/types/ColumnType";

import useBoardStore from "../../../app/store/board/boardStore";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import UpdateInput from "../UpdateInput";

const ColumnHead = ({ column }: { column: ColumnType }) => {
  const [value, setValue] = useState<string>(column.columnName);
  const { theme } = useStore();
  const { currentBoard, updateColumn, deleteColumn } = useBoardStore();

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
      <UpdateInput
        handleUpdate={handleUpdateColumn}
        setValue={setValue}
        defFalue={value}
      />

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
    </div>
  );
};

export default ColumnHead;
