import { useForm } from "react-hook-form";
import useStore from "../../../app/store";
import type { ColumnType } from "../../../features/register/types/BoardType";

const AddColumnInput = ({
  toggleShowInputColumn,
}: {
  toggleShowInputColumn: () => void;
}) => {
  const { register, handleSubmit } = useForm();
  const { theme, currentBoard, addColumn } = useStore();

  const onSubmit = async (data: any) => {
    if (currentBoard) {
      const newColumn: ColumnType = {
        id: currentBoard.columns[currentBoard.columns.length - 1].id + 1,
        columnName: data.columnName,
        taskList: [],
      };

      const newColumnList = [...currentBoard.columns, newColumn];

      addColumn(currentBoard, newColumnList);
    }
  };
  return (
    <form
      className="h-full  flex flex-col gap-3 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("columnName")}
        className={`p-2 w-full rounded-md outline-none capitalize lg:hover:cursor-pointer ${
          theme === "light"
            ? "bg-[#e0dfdf] text-slate-800 lg:hover:bg-slate-200"
            : " bg-[#333333] text-slate-200 lg:hover:bg-slate-600"
        }`}
      />
      <div className="flex justify-between gap-3">
        <button
          className={`px-5 py-2 w-full rounded-md font-medium lg:hover:cursor-pointer transition-all duration-200 ${
            theme === "light"
              ? "bg-slate-300 text-slate-800 lg:hover:bg-slate-800  lg:hover:text-slate-200 "
              : "bg-slate-800 text-slate-200 lg:hover:bg-slate-200  lg:hover:text-slate-800 "
          }`}
        >
          Add Column
        </button>
        <button
          className="px-5 py-2 w-fit  transition-all duration-200 bg-red-500 rounded-md text-lg font-medium text-white lg:hover:cursor-pointer lg:hover:bg-red-400"
          onClick={toggleShowInputColumn}
        >
          x
        </button>
      </div>
    </form>
  );
};

export default AddColumnInput;
