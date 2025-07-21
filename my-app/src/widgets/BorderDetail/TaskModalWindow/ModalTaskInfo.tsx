import dayjs from "dayjs";
import useStore from "../../../app/store";
import type { TaskType } from "../../../features/register/types/TaskType";

const ModalTaskInfo = ({ task }: { task: TaskType | null }) => {
  const date = dayjs(Number(task?.date));
  const { theme } = useStore();

  return (
    <div className="">
      <p
        className={`${theme === "light" ? "text-slate-800" : "text-slate-300"}`}
      >
        <span className="text-md uppercase font-medium">Task title :</span>
        <span> {task?.taskTitle}</span>
      </p>
      <p
        className={` ${
          theme === "light" ? "text-slate-800" : "text-slate-300"
        }`}
      >
        <span className="text-md uppercase font-medium">Created Date :</span>
        <span> {date.format("DD-MM-YYYY HH:mm")}</span>
      </p>
    </div>
  );
};

export default ModalTaskInfo;
