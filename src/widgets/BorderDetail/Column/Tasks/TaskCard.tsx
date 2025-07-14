import useStore from "../../../../app/store";
import type { ColumnType } from "../../../../features/register/types/ColumnType";
import type { TaskType } from "../../../../features/register/types/TaskType";
import TaskButtons from "./TaskButtons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ task, column }: { task: TaskType; column: ColumnType }) => {
  const { theme } = useStore();
  const {
    isDragging,
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
  } = useSortable({ id: task.id, data: { type: "Task", task } });
  const style = { transform: CSS.Transform.toString(transform), transition };

  if (isDragging) {
    <div>Drag Task</div>;
  }

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      className={`cursor-grab  p-1 w-full rounded-md flex px-2 items-center justify-between ${
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
