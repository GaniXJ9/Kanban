import CloseIcon from "../../../shared/icons/CloseIcon";
import useTasks from "../../../app/store/tasks";
import PictureTwotone from "../../../shared/icons/PictureTwotone";
import ModalInfo from "./ModalInfo";
import ImportanceUI from "./ImportanceUI";

const ModalHeader = () => {
  const { setCurrentTask } = useTasks();

  const closeModal = () => setCurrentTask(null);

  return (
    <div className=" bg-[#6565a4]  dark:bg-[#1a1a1a] p-5 px-10 flex items-center relative rounded-t-2xl border-b border-white dark:border-[#535252]">
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
      <ModalInfo />
      <ImportanceUI />
    </div>
  );
};

export default ModalHeader;
//
