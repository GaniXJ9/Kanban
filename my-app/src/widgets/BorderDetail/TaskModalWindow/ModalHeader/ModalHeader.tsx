import CloseIcon from "../../../../shared/icons/CloseIcon";
import DangerButton from "../../../../shared/ui/buttons/DangerButton";
import ModalInfo from "./ModalInfo";
import ImportanceUI from "./ImportanceUI";
import useTasks from "../../../../app/store/tasks";
import clsx from "clsx";

const ModalHeader = () => {
  const { setCurrentTask, currentTask } = useTasks();

  const closeModal = () => setCurrentTask(null);

  return (
    <div className=" bg-[#6565a4]  dark:bg-[#1a1a1a] p-2 lg:p-5 lg:px-10 flex items-center relative rounded-t-2xl border-b border-white dark:border-[#535252]">
      <div
        className={clsx(
          currentTask && "-top-10",
          "absolute -top-0 lg:top-5 right-5 flex items-center gap-5"
        )}
      >
        <DangerButton
          onClick={closeModal}
          padding="p-2"
          Icon={CloseIcon}
          rounded="md"
        />
      </div>

      <ModalInfo />
      <ImportanceUI />
    </div>
  );
};

export default ModalHeader;
//
