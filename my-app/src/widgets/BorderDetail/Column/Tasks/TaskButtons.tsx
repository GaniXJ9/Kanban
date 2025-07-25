import useStore from "../../../../app/store";
import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import useBoards from "../../../../app/store/boards";
import useTasks from "../../../../app/store/tasks";
import BarsOutlined from "../../../../shared/icons/BarsOutlined";
import DeleteTaskIcon from "../../../../shared/icons/DeleteTaskIcon";
import type { Id } from "../../../../shared/type/IdType";

const TaskButtons = ({
  column,
  taskId,
}: {
  column: ColumnEntity;
  taskId: Id;
}) => {
  const { theme } = useStore();
  const { currentBoard } = useBoards();
  const { setCurrentTask, deleteTask } = useTasks();

  const handleDeleteTask = () => {
    if (currentBoard) {
      deleteTask(taskId, column, currentBoard);
      setCurrentTask(null);
    }
  };

  const showModal = () => {
    const currentTask = column.tasks.find((task) => task.id === taskId);
    if (currentTask) {
      setCurrentTask(currentTask);
    } else {
      console.log("Task Not Found");
    }
  };

  return (
    <div className="flex gap-1 z-0">
      <button
        onClick={showModal}
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
