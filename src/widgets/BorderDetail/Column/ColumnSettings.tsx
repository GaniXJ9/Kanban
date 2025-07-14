import useStore from "../../../app/store";
import useBoardStore from "../../../app/store/board/boardStore";
import useColumnStore from "../../../app/store/column/columnStore";
import type { Id } from "../../../app/store/StoreInterface";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import EditIcon from "../../../shared/icons/EditIcon";

const ColumnSettings = ({
  id,
  showSettings,
}: {
  id: Id;
  showSettings: boolean;
}) => {
  const { theme } = useStore();
  const { currentBoard } = useBoardStore();
  const { deleteColumn } = useColumnStore();

  const handleDeleteColumn = () => {
    if (currentBoard) {
      deleteColumn(currentBoard, id);
    }
  };

  return (
    <div
      className={`absolute flex flex-col justify-around  top-11 right-1 rounded-md transition-all duration-200 overflow-hidden
            ${theme === "light" ? "shadow-md bg-slate-400" : " bg-slate-600"}
            
            ${showSettings ? "max-h-full" : "max-h-0"}`}
    >
      <button
        onClick={handleDeleteColumn}
        className="block m-1 p-2 bg-red-500 text-center rounded-md text-slate-200 lg:hover:cursor-pointer lg:hover:bg-slate-100 lg:hover:text-slate-700 transition-all duration-200"
      >
        <DeleteIcon />
      </button>
      <button className="block m-1 p-2 bg-slate-700 text-center rounded-md text-slate-200 lg:hover:cursor-pointer lg:hover:bg-slate-100 lg:hover:text-slate-700 transition-all duration-200">
        <EditIcon />
      </button>
    </div>
  );
};

export default ColumnSettings;
