import AddTaskBlock from "../AddTaskBlock";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ColumnHead from "./ColumnHead";
import TaskContainer from "./Tasks/TaskContainer";
import useStore from "../../../app/store";
import { useEffect, useState } from "react";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { TaskType } from "../../../features/register/types/TaskType";

const BoardColumn = ({ column }: { column: ColumnType }) => {
  const {
    setNodeRef,
    isDragging,
    attributes,
    listeners,
    transform,
    transition,
  } = useSortable({ id: column.id, data: { type: "Column", column } });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const { theme } = useStore();

  useEffect(() => {
    setTasks(column.taskList);
  }, [column]);

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      className={`relative  flex flex-col gap-3 rounded-md p-5 h-fit  ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }
     ${isDragging && "opacity-70"}
      `}
    >
      <ColumnHead column={column} />
      <TaskContainer tasks={tasks} column={column} />
      <AddTaskBlock id={column.id} isDragging={isDragging} />
    </div>
  );
};

export default BoardColumn;
