import { useEffect, useState, type ChangeEvent } from "react";
import useTasks from "../../../app/store/tasks";
import useColumns from "../../../app/store/columns";
import useBoards from "../../../app/store/boards";

const TaskDescription = () => {
  const { currentBoard } = useBoards();
  const { currentColumn } = useColumns();
  const { currentTask, updateDescription } = useTasks();
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleUpdate = () => {
    if (currentTask && currentColumn && currentBoard) {
      updateDescription(currentTask, value, currentColumn, currentBoard);
    }
  };

  useEffect(() => {
    setValue(currentTask?.description || "");
  }, [currentTask?.id]);

  return (
    <div className="p-5 w-full border-r border-[#535252]">
      <p className="border-b text-2xl text-slate-600 dark:text-slate-200 font-medium py-2">
        Description
      </p>
      <textarea
        onBlur={handleUpdate}
        placeholder="You can add description...."
        className="p-2 text-md h-36 font-normal first-letter:uppercase border lg:cursor-pointer dark:lg:hover:bg-slate-600 lg:hover:bg-slate-400 text-slate-600 dark:text-slate-200 w-full mt-5 bg-slate-300 dark:bg-[#4c4b4b] rounded-lg"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TaskDescription;
