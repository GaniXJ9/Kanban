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
}: {
  column: ColumnType;
  taskId: Id;
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
    <div className="flex gap-1">
      <button
        className={`size-6  rounded-md border  flex items-center justify-center 
            ${
              theme === "light"
                ? "text-slate-600 bg-slate-100 border-[#a5a1a1]"
                : "text-slate-200 bg-[#606060] border-[#1a1a1a]"
            } `}
      >
        <EditTaskIcon />
      </button>

      <button
        className={`size-6   rounded-md border  flex items-center justify-center 
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
