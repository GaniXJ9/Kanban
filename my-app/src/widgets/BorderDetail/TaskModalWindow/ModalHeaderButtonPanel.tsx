import useStore from "../../../app/store";
// import useBoardStore from "../../../app/store/board/boardStore";
import CloseIcon from "../../../shared/icons/CloseIcon";
import PictureTwotone from "../../../shared/icons/PictureTwotone";

const ModalHeaderButtonPanel = () => {
  const { theme } = useStore();
  // const { setCurrentTask } = useBoardStore();

  // const setCurrentTaskToNull = () => {
  //   setCurrentTask(null);
  // };

  return (
    <div className="flex items-center gap-5">
      <button
        title="Add background"
        className={` lg:hover:cursor-pointer ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        }`}
      >
        <PictureTwotone />
      </button>
      <button
        title="close"
        className={` lg:hover:cursor-pointer ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        }`}
        // onClick={setCurrentTaskToNull}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default ModalHeaderButtonPanel;
