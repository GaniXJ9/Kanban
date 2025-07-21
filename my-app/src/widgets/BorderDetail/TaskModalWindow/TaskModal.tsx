import useStore from "../../../app/store";

import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

const TaskModal = () => {
  const { theme } = useStore();

  return (
    <section className="fixed flex pt-32  justify-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
      <div
        className={`relative w-11/12 lg:w-3/4 h-fit border  rounded-lg  overflow-y-hidden ${
          theme === "light"
            ? "bg-slate-300 border-[#1a1a1a]"
            : "bg-[#25272a] border-gray-300"
        }`}
      >
        <ModalHeader />

        <ModalBody />
      </div>
    </section>
  );
};

export default TaskModal;
