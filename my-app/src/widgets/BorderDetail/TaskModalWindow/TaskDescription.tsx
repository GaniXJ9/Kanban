import { useEffect, useState } from "react";
import useTasks from "../../../app/store/tasks";
import useColumns from "../../../app/store/columns";
import useBoards from "../../../app/store/boards";
import Textarea from "../../../shared/ui/textareas/Textarea";

const TaskDescription = () => {
  const { currentBoard } = useBoards();
  const { currentColumn } = useColumns();
  const { currentTask, updateDescription } = useTasks();
  const [value, setValue] = useState("");

  const handleUpdate = () => {
    if (currentTask && currentColumn && currentBoard) {
      updateDescription(currentTask, value, currentColumn, currentBoard);
    }
  };

  useEffect(() => {
    setValue(currentTask?.description || "");
  }, [currentTask?.id]);

  return (
    <div className="container border-b lg:p-5 w-full lg:border-r  border-[#535252]">
      <p className="border-b text:lg lg:text-2xl text-slate-600 dark:text-slate-200 font-medium py-2">
        Description
      </p>
      <div className="py-5">
        <Textarea
          onBlur={handleUpdate}
          required={false}
          placeholder="You can add description...."
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default TaskDescription;
