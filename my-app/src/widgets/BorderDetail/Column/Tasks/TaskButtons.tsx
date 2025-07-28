import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import useBoards from "../../../../app/store/boards";
import useTasks from "../../../../app/store/tasks";
import BarsOutlined from "../../../../shared/icons/BarsOutlined";
import DeleteTaskIcon from "../../../../shared/icons/DeleteTaskIcon";
import type { Id } from "../../../../shared/type/IdType";
import useColumns from "../../../../app/store/columns";

const TaskButtons = ({
  column,
  taskId,
}: {
  column: ColumnEntity;
  taskId: Id;
}) => {
  const { currentBoard } = useBoards();
  const { setCurrentColumn } = useColumns();
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
      setCurrentColumn(column);
    } else {
      console.log("Task Not Found");
    }
  };

  // const onFocus = () => {
  //   const currentTask = column.tasks.find((task) => task.id === taskId);
  //   if (currentTask) {
  //     setCurrentTask(currentTask);
  //     setCurrentColumn(column);
  //   } else {
  //     console.log("Task Not Found");
  //   }
  // };

  // const onBlur = () => {
  //   setCurrentTask(null);
  //   setCurrentColumn(null);
  // };

  return (
    <div className="flex gap-1 z-0">
      <button
        onClick={showModal}
        className={`size-6  rounded-md border  flex items-center justify-center lg:hover:cursor-pointer text-slate-600 bg-slate-100 border-[#a5a1a1] dark:text-slate-200 dark:bg-[#606060] dark:border-[#1a1a1a]`}
      >
        <BarsOutlined />
      </button>
      {/* 
      <div className="relative">
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className={`size-6 rounded-md border  flex items-center justify-center lg:hover:cursor-pointer text-slate-600 bg-slate-100 border-[#a5a1a1] dark:text-slate-200 dark:bg-[#606060] dark:border-[#1a1a1a]`}
        />
        <span className="absolute top-1 left-1 pointer-events-none">
          <BarsOutlined />
        </span>
      </div> */}

      <button
        className={`size-6   rounded-md border  flex items-center justify-center  lg:hover:cursor-pointer text-slate-200 bg-[#f82758] border-[#a5a1a1] dark:text-slate-200 dark:bg-[#e9093d] dark:border-[#1a1a1a]`}
        onClick={handleDeleteTask}
      >
        <DeleteTaskIcon />
      </button>
    </div>
  );
};

export default TaskButtons;
