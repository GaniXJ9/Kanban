import useTasks from "../../../app/store/tasks";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import { importanceColor } from "../../../shared/actions/importanceColor";

const DropDownElement = ({ task }: { task: TaskEntity }) => {
  const { setCurrentTask } = useTasks();

  const handleSearchTask = () => {
    setCurrentTask(task);
  };

  return (
    <div
      className="p-2 text-slate-600 dark:text-slate-200 lg:hover:bg-slate-400 lg:hover:text-slate-200 
     dark:lg:hover:bg-slate-300 dark:lg:hover:text-slate-600
     flex items-center justify-between
     "
      onClick={handleSearchTask}
    >
      <p>{task.name}</p>

      <div
        className={`size-3 mx-2 p-2 outline-none rounded-full transition-shadow duration-300 
    shadow-[0_0_0_1px_white] 
    ${importanceColor(task?.importance || null)} 
    ${task?.importance ? "shadow-[0_0_8px_3px_rgba(255,255,255,0.4)]" : ""}`}
        title={task?.importance || "Set Importance"}
        tabIndex={0}
      ></div>
    </div>
  );
};

export default DropDownElement;
