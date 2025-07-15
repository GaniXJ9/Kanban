import useStore from "../../../../app/store";
import useBoardStore from "../../../../app/store/board/boardStore";
import type { Id } from "../../../../app/store/StoreInterface";
import useTaskStore from "../../../../app/store/task/taskStore";
import type { ColumnType } from "../../../../features/register/types/ColumnType";
import DeleteTaskIcon from "../../../../shared/icons/DeleteTaskIcon";
import EditTaskIcon from "../../../../shared/icons/EditTaskIcon";

const TaskButtons = ({
  column,
  taskId,
  toggelEditMode,
}: {
  column: ColumnType;
  taskId: Id;
  toggelEditMode: () => void;
}) => {
  const { theme } = useStore();
  const { currentBoard } = useBoardStore();
  const { deleteTask } = useTaskStore();

  const handleDeleteTask = () => {
    if (currentBoard) {
      deleteTask(column, taskId, currentBoard);
    }
  };

  return (
    <div className="flex gap-1 z-0">
      <button
        onClick={toggelEditMode}
        className={`size-6  rounded-md border  flex items-center justify-center lg:hover:cursor-pointer
            ${
              theme === "light"
                ? "text-slate-600 bg-slate-100 border-[#a5a1a1]"
                : "text-slate-200 bg-[#606060] border-[#1a1a1a]"
            } `}
      >
        <EditTaskIcon />
      </button>
      <button
        className={`size-6   rounded-md border  flex items-center justify-center  lg:hover:cursor-pointer
            ${
              theme === "light"
                ? "text-slate-200 bg-[#f82758] border-[#a5a1a1] "
                : "text-slate-200 bg-[#e9093d] border-[#1a1a1a]"
            } `}
        onClick={handleDeleteTask}
      >
        <DeleteTaskIcon />
      </button>
    </div>
  );
};

export default TaskButtons;
