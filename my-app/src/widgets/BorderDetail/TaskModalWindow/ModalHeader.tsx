import CloseIcon from "../../../shared/icons/CloseIcon";
import useTasks from "../../../app/store/tasks";
import useColumns from "../../../app/store/columns";
import PictureTwotone from "../../../shared/icons/PictureTwotone";
import dayjs from "dayjs";
import ImportanceUI from "./ImportanceUI";

const ModalHeader = () => {
  const { currentColumn } = useColumns();
  const { currentTask, setCurrentTask } = useTasks();

  const closeModal = () => setCurrentTask(null);

  return (
    <div className="h-20  bg-[#6565a4]  dark:bg-slate-800 p-10 flex items-center relative rounded-t-2xl">
      <div className="absolute top-5 right-5 flex items-center gap-5">
        <span className="cursor-pointer  text-slate-200 bg-slate-900/30 p-2 rounded-lg">
          <PictureTwotone />
        </span>
        <span
          onClick={closeModal}
          className="cursor-pointer text-slate-200 bg-slate-900/30 p-2 rounded-lg"
        >
          <CloseIcon />
        </span>
      </div>
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
      <ImportanceUI />
    </div>
  );
};

export default ModalHeader;
//
