import useStore from "../../../../app/store";
import type {
  ColumnType,
  TaskType,
} from "../../../../features/register/types/BoardType";
import DeleteTaskIcon from "../../../../shared/icons/DeleteTaskIcon";
import EditTaskIcon from "../../../../shared/icons/EditTaskIcon";

const TaskButtons = ({
  column,
  taskId,
}: {
  column: ColumnType;
  taskId: number;
}) => {
  const { theme, currentBoard, deleteTask } = useStore();

  const handleDeleteTask = () => {
    if (currentBoard) {
      deleteTask(column, taskId, currentBoard);
    }
  };

  return (
    <div className="flex gap-1">
      <span
        className={`size-6  rounded-md border  flex items-center justify-center 
            ${
              theme === "light"
                ? "text-slate-600 bg-slate-100 border-[#a5a1a1]"
                : "text-slate-200 bg-[#606060] border-[#1a1a1a]"
            } `}
      >
        <EditTaskIcon />
      </span>

      <span
        className={`size-6   rounded-md border  flex items-center justify-center 
            ${
              theme === "light"
                ? "text-slate-200 bg-[#f82758] border-[#a5a1a1] "
                : "text-slate-200 bg-[#e9093d] border-[#1a1a1a]"
            } `}
        onClick={handleDeleteTask}
      >
        <DeleteTaskIcon />
      </span>
    </div>
  );
};

export default TaskButtons;
