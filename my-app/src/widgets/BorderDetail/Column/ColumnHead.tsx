import { useState } from "react";
import useStore from "../../../app/store";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import UpdateInput from "../UpdateInput";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../../../app/store/boards";
import useColumns from "../../../app/store/columns";

const ColumnHead = ({ column }: { column: ColumnEntity }) => {
  const [value, setValue] = useState<string>(column.name);
  const { theme } = useStore();
  const { currentBoard } = useBoards();
  const { deleteColumn, updateColumn } = useColumns();

  const handleUpdate = () => {
    if (currentBoard) {
      updateColumn(currentBoard, column, value);
    }
  };

  const handleDelete = () => {
    if (currentBoard) {
      deleteColumn(column.id, currentBoard);
    }
  };

  return (
    <div className="flex justify-between items-center gap-1">
      <UpdateInput
        handleUpdate={handleUpdate}
        setValue={setValue}
        defFalue={value}
      />
      <button
        onClick={handleDelete}
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
