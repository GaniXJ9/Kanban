import useTasks from "../../../app/store/tasks";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

const TaskModal = () => {
  const { currentTask } = useTasks();

  return (
    <aside
      className={`fixed z-50 left-0 bottom-0 w-full rounded-t-2xl  dark:border dark:border-[] transition-transform duration-300 transform
       bg-[#f5f5f5]
       
        ${currentTask ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <ModalHeader />
      <ModalBody />
    </aside>
  );
};

export default TaskModal;
