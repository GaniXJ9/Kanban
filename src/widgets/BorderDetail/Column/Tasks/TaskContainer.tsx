import { SortableContext } from "@dnd-kit/sortable";
import type {
  ColumnType,
  TaskType,
} from "../../../../features/register/types/BoardType";
import TaskCard from "./TaskCard";
import { useMemo } from "react";

const TaskContainer = ({
  tasks,
  column,
}: {
  tasks: TaskType[];
  column: ColumnType;
}) => {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  return (
    <SortableContext items={tasksIds}>
      <div className="flex flex-col gap-2">
        {tasks.map((task: TaskType) => (
          <TaskCard task={task} key={task.id} column={column} />
        ))}
      </div>{" "}
    </SortableContext>
  );
};

export default TaskContainer;
