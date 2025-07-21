import useStore from "../../../../app/store";
import useBoardStore from "../../../../app/store/board/boardStore";
import type { ColumnType } from "../../../../features/register/types/ColumnType";
import type { TaskType } from "../../../../features/register/types/TaskType";
import BarsOutlined from "../../../../shared/icons/BarsOutlined";
import DeleteTaskIcon from "../../../../shared/icons/DeleteTaskIcon";
import type { Id } from "../../../../shared/type/IdType";

const TaskButtons = ({
  column,
  taskId,
}: {
  column: ColumnType;
  taskId: Id;
}) => {
  const { theme } = useStore();
  const { currentBoard, deleteTask, setCurrentTask } = useBoardStore();

  const handleDeleteTask = () => {
    if (currentBoard) {
      deleteTask(column, taskId, currentBoard);
    }
  };

  const handleCurrentTask = () => {
    const task = column.taskList.find((item: TaskType) => item.id === taskId);

    if (task) {
      setCurrentTask(task);
    }
  };

  return (
    <div className="flex gap-1 z-0">
      <button
        onClick={handleCurrentTask}
        className={`size-6  rounded-md border  flex items-center justify-center lg:hover:cursor-pointer
            ${
              theme === "light"
                ? "text-slate-600 bg-slate-100 border-[#a5a1a1]"
                : "text-slate-200 bg-[#606060] border-[#1a1a1a]"
            } `}
      >
        <BarsOutlined />
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
