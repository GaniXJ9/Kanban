import { SortableContext } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import { useMemo } from "react";
import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import type { TaskEntity } from "../../../../features/types/tasks/TaskEntity";
import useTasks from "../../../../app/store/tasks";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import clsx from "clsx";

const TaskList = ({
  tasks,
  column,
}: {
  tasks: TaskEntity[];
  column: ColumnEntity;
}) => {
  const { taskLoadId } = useTasks();

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  return (
    <SortableContext items={tasksIds}>
      <div className={clsx("flex flex-col gap-2")}>
        {taskLoadId === column.id ? (
          <>
            {tasks.map((task: TaskEntity) => (
              <TaskCard task={task} key={task.id} column={column} />
            ))}
            <SkeletonTheme
              baseColor="rgb(0,0,0,0.2)"
              highlightColor="rgb(0,0,0,0.1)"
            >
              <Skeleton height={20} />
            </SkeletonTheme>
          </>
        ) : (
          tasks.map((task: TaskEntity) =>
            taskLoadId === task.id ? (
              <SkeletonTheme
                baseColor="rgb(0,0,0,0.2)"
                highlightColor="rgb(0,0,0,0.1)"
              >
                <Skeleton height={20} key={task.id} />
              </SkeletonTheme>
            ) : (
              <TaskCard task={task} key={task.id} column={column} />
            )
          )
        )}
      </div>
    </SortableContext>
  );
};

export default TaskList;
