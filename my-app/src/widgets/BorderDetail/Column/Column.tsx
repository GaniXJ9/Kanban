import AddTaskBlock from "../AddTaskBlock";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ColumnHead from "./ColumnHead";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import TaskList from "./Tasks/TaskList";

const Column = ({ column }: { column: ColumnEntity }) => {
  const { setNodeRef, isDragging, attributes, listeners } = useSortable({
    id: column.id,
    data: { type: "Column", column },
  });

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      className={`relative flex flex-col flex-shrink-0 space-y-3 rounded-lg py-3 px-4 bg-white dark:bg-[#1a1a1a]
    ${isDragging && "opacity-70"}
  `}
    >
      <ColumnHead column={column} />
      <TaskList tasks={column.tasks} column={column} />
      <AddTaskBlock column={column} isDragging={isDragging} />
    </div>
  );
};

export default Column;
