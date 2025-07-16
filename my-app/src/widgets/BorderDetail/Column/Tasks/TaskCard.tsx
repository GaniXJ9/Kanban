import useStore from "../../../../app/store";
import type { ColumnType } from "../../../../features/register/types/ColumnType";
import type { TaskType } from "../../../../features/register/types/TaskType";
import TaskButtons from "./TaskButtons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import useBoardStore from "../../../../app/store/board/boardStore";
import UpdateInput from "../../UpdateInput";

const TaskCard = ({ task, column }: { task: TaskType; column: ColumnType }) => {
  const [value, setValue] = useState<string>(task.taskTitle);
  const { theme } = useStore();
  const { currentBoard, updateTask } = useBoardStore();
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: task.id, data: { type: "Task", task } });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const handleUpdateTask = () => {
    if (currentBoard) {
      updateTask(column.id, task.id, value, currentBoard);
    }
  };

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      className={`cursor-grab relative p-1 w-full rounded-md flex gap-2 px-2 items-center justify-between ${
        theme === "light" ? "bg-slate-300" : "bg-[#222222] "
      }`}
    >
      <UpdateInput
        handleUpdate={handleUpdateTask}
        defFalue={value}
        setValue={setValue}
      />

      <TaskButtons column={column} taskId={task.id} />
    </div>
  );
};

export default TaskCard;
