import AddTaskBlock from "../AddTaskBlock";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ColumnHead from "./ColumnHead";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import TaskContainer from "./Tasks/TaskContainer";

const BoardColumn = ({ column }: { column: ColumnEntity }) => {
  const {
    setNodeRef,
    isDragging,
    attributes,
    listeners,
    transform,
    transition,
  } = useSortable({ id: column.id, data: { type: "Column", column } });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      className={`relative  flex flex-col gap-3 rounded-md p-5 h-fit bg-white dark:bg-[#1a1a1a]
     ${isDragging && "opacity-70"}
      `}
    >
      <ColumnHead column={column} />
      <TaskContainer tasks={column.tasks} column={column} />
      <AddTaskBlock column={column} isDragging={isDragging} />
    </div>
  );
};

export default BoardColumn;
