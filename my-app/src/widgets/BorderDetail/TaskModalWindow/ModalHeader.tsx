import useStore from "../../../app/store";
// import useBoardStore from "../../../app/store/board/boardStore";
import ModalHeaderButtonPanel from "./ModalHeaderButtonPanel";
// import ModalTaskInfo from "./ModalTaskInfo";

const ModalHeader = () => {
  const { theme } = useStore();
  // const { currentTask } = useBoardStore();

  return (
    <div
      className={`flex items-center justify-between px-10 h-16 border-b ${
        theme === "light" ? "border-[#1a1a1a]" : "border-gray-300"
      }`}
    >
      {/* <ModalTaskInfo task={currentTask} /> */}
      <ModalHeaderButtonPanel />
    </div>
  );
};

export default ModalHeader;
