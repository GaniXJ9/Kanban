import { useState } from "react";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import UpdateInput from "../UpdateInput";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../../../app/store/boards";
import useColumns from "../../../app/store/columns";
import useTasks from "../../../app/store/tasks";

const ColumnHead = ({ column }: { column: ColumnEntity }) => {
  const [value, setValue] = useState<string>(column.name);
  const { currentBoard } = useBoards();
  const { deleteColumn, updateColumn } = useColumns();
  const { setCurrentTask } = useTasks();

  const handleUpdate = () => {
    if (currentBoard) {
      updateColumn(currentBoard, column, value);
    }
  };

  const handleDelete = () => {
    if (currentBoard) {
      deleteColumn(column.id, currentBoard);
      setCurrentTask(null);
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
        className={`block m-1 p-2 text-center rounded-md  lg:hover:cursor-pointer  transition-all duration-200 text-slate-600 lg:hover:bg-slate-600 lg:hover:text-slate-200 dark:text-slate-200 dark:lg:hover:bg-[#373737] dark:lg:hover:text-slate-600`}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ColumnHead;
