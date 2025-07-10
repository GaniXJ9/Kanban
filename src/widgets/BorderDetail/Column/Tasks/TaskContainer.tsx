import type {
  ColumnType,
  TaskType,
} from "../../../../features/register/types/BoardType";
import TaskCard from "./TaskCard";

const TaskContainer = ({ column }: { column: ColumnType }) => {
  return (
    <div className="flex flex-col gap-2">
      {column.taskList.map((task: TaskType) => (
        <TaskCard task={task} key={task.id} column={column} />
      ))}
    </div>
  );
};

export default TaskContainer;
