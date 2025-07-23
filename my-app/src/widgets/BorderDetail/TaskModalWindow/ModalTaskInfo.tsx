import dayjs from "dayjs";
import useStore from "../../../app/store";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";

const ModalTaskInfo = ({ task }: { task: TaskEntity | null }) => {
  const date = dayjs(Number(task?.date));
  const { theme } = useStore();

  return (
    <div className="">
      <p
        className={`${theme === "light" ? "text-slate-800" : "text-slate-300"}`}
      >
        <span className="text-md uppercase font-medium">Task name :</span>
        <span> {task?.name}</span>
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
