import { useState } from "react";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import UpdateInput from "../../../shared/ui/inputs/UpdateInput";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../../../app/store/boards";
import useColumns from "../../../app/store/columns";
import useTasks from "../../../app/store/tasks";
import SecondaryButton from "../../../shared/ui/buttons/SecondaryButton";

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

      <SecondaryButton
        onClick={handleDelete}
        padding="p-2"
        rounded="md"
        Icon={DeleteIcon}
      />
    </div>
  );
};

export default ColumnHead;
