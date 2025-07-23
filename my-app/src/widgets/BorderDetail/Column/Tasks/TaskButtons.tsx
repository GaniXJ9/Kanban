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
  const { deleteTask } = useTasks();

  const handleDeleteTask = () => {
    if (currentBoard) {
      deleteTask(taskId, column, currentBoard);
    }
  };

  return (
    <div className="flex gap-1 z-0">
      <button
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
