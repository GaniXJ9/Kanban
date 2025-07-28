import TaskButtons from "./TaskButtons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import UpdateInput from "../../UpdateInput";
import type { TaskEntity } from "../../../../features/types/tasks/TaskEntity";
import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import useBoards from "../../../../app/store/boards";
import useTasks from "../../../../app/store/tasks";

const TaskCard = ({
  task,
  column,
}: {
  task: TaskEntity;
  column: ColumnEntity;
}) => {
  const [value, setValue] = useState<string>(task.name);
  const { currentBoard } = useBoards();
  const { updateTitle } = useTasks();
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: task.id,
      data: {
        type: "Task",
        task,
        column,
      },
    });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const handleUpdateTask = () => {
    if (currentBoard) {
      updateTitle(task, value, column, currentBoard);
    }
  };

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      onClick={() => console.log(task)}
      className={`z-20 cursor-grab relative p-1 w-full rounded-md flex gap-2 px-2 items-center justify-between bg-slate-300 dark:bg-[#222222]`}
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
