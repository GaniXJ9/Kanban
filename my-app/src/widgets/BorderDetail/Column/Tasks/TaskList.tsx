import { SortableContext } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import { useMemo } from "react";
import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import type { TaskEntity } from "../../../../features/types/tasks/TaskEntity";

const TaskList = ({
  tasks,
  column,
}: {
  tasks: TaskEntity[];
  column: ColumnEntity;
}) => {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  return (
    <SortableContext items={tasksIds}>
      <div className="flex flex-col gap-2">
        {tasks.map((task: TaskEntity) => (
          <TaskCard task={task} key={task.id} column={column} />
        ))}
      </div>
    </SortableContext>
  );
};

export default TaskList;
