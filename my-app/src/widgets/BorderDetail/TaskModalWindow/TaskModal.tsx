import useTasks from "../../../app/store/tasks";
import CloseIcon from "../../../shared/icons/CloseIcon";

const TaskModal = () => {
  const { currentTask, setCurrentTask } = useTasks();

  const closeModal = () => setCurrentTask(null);

  return (
    <aside
      className={`fixed z-50 left-0 bottom-0 w-full px-10 py-10 border transition-transform duration-300 transform
       bg-white
       
        ${currentTask ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <span
        onClick={closeModal}
        className="absolute top-3 right-3 cursor-pointer"
      >
        <CloseIcon />
      </span>

      <h2 className="text-xl font-bold">{currentTask?.name}</h2>
    </aside>
  );
};

export default TaskModal;
