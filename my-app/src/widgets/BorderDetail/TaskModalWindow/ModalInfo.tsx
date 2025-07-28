import dayjs from "dayjs";
import useColumns from "../../../app/store/columns";
import useTasks from "../../../app/store/tasks";

const ModalInfo = () => {
  const { currentColumn } = useColumns();
  const { currentTask } = useTasks();

  return (
    <div className="flex gap-2 items-center">
      <p className="bg-gray-200/20 p-2 rounded-lg">
        <span className="text-xl font-medium text-slate-200">Column:</span>{" "}
        <span className="text-lg font-medium text-slate-200">
          {currentColumn?.name}
        </span>
      </p>

      <p className="bg-gray-200/20 p-2 rounded-lg">
        <span className="text-xl font-medium text-slate-200">Task:</span>{" "}
        <span className="text-lg font-medium text-slate-200">
          {currentTask?.name}
        </span>
      </p>

      <p className="bg-gray-200/20 p-2 rounded-lg">
        <span className="text-xl font-medium text-slate-200">
          Created Date:
        </span>{" "}
        <span className="text-lg font-medium text-slate-200">
          {dayjs(currentTask?.date).format("YYYY-MM-DD")}
        </span>
      </p>
    </div>
  );
};

export default ModalInfo;
