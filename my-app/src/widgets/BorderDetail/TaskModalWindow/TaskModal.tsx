import { useEffect, useRef } from "react";
import useTasks from "../../../app/store/tasks";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader/ModalHeader";

const TaskModal = () => {
  const { currentTask, setCurrentTask } = useTasks();
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    if (currentTask) () => setCurrentTask(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        currentTask &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setCurrentTask(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [currentTask, setCurrentTask]);

  return (
    <>
      {currentTask && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-all duration-300"
          onClick={closeModal}
        />
      )}

      <aside
        ref={modalRef}
        className={`fixed z-50 left-0 bottom-0 w-full rounded-t-2xl
    bg-slate-200 dark:bg-[#292828] transition-all duration-200 transform
    ${currentTask ? "translate-y-0" : "translate-y-full"}`}
      >
        <ModalHeader />
        <ModalBody />
      </aside>
    </>
  );
};

export default TaskModal;
