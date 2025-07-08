import useStore from "../../../app/store";
import DeleteIcon from "../../../shared/icons/DeleteIcon";
import EditIcon from "../../../shared/icons/EditIcon";

const ColumnSettings = ({
  id,
  showSettings,
}: {
  id: number;
  showSettings: boolean;
}) => {
  const { theme, currentBoard, deleteColumn } = useStore();

  const handleDeleteColumn = () => {
    if (currentBoard) {
      deleteColumn(currentBoard, id);
    }
  };

  return (
    <div
      className={`absolute flex flex-col justify-around  top-11 right-1 rounded-md transition-all duration-200 overflow-hidden
            ${theme === "light" ? "shadow-md bg-slate-400" : " bg-slate-600"}
            
            ${showSettings ? "h-full" : "h-0"}`}
    >
      <span
        onClick={handleDeleteColumn}
        className="block m-1 p-2 bg-red-500 text-center rounded-md text-slate-200 lg:hover:cursor-pointer lg:hover:bg-slate-100 lg:hover:text-slate-700 transition-all duration-200"
      >
        <DeleteIcon />
      </span>
      <span className="block m-1 p-2 bg-slate-700 text-center rounded-md text-slate-200 lg:hover:cursor-pointer lg:hover:bg-slate-100 lg:hover:text-slate-700 transition-all duration-200">
        <EditIcon />
      </span>
    </div>
  );
};

export default ColumnSettings;
