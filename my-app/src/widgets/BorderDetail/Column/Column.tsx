import AddTaskBlock from "../AddTaskBlock";
import { useSortable } from "@dnd-kit/sortable";
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
      className={`w-full lg:w-fit relative flex flex-col flex-shrink-0 space-y-3 rounded-lg py-3 px-4 bg-white dark:bg-[#1a1a1a] h-fit
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
