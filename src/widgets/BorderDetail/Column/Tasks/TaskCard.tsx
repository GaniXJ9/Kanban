import useStore from "../../../../app/store";
import type {
  ColumnType,
  TaskType,
} from "../../../../features/register/types/BoardType";
import TaskButtons from "./TaskButtons";

const TaskCard = ({ task, column }: { task: TaskType; column: ColumnType }) => {
  const { theme } = useStore();
  return (
    <div
      className={`p-1 w-full rounded-md flex px-2 items-center justify-between ${
        theme === "light" ? "bg-slate-300" : "bg-[#222222] "
      }`}
    >
      <h1
        className={`${theme === "light" ? "text-slate-600" : "text-slate-200"}`}
      >
        {task.taskTitle}
      </h1>
      <TaskButtons column={column} taskId={task.id} />
    </div>
  );
};

export default TaskCard;
