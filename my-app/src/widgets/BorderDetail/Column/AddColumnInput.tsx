import { useForm } from "react-hook-form";
import useStore from "../../../app/store";
import useBoardStore from "../../../app/store/board/boardStore";
import type { ColumnType } from "../../../features/register/types/ColumnType";

const AddColumnInput = ({
  toggleShowInputColumn,
}: {
  toggleShowInputColumn: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { theme } = useStore();
  const { currentBoard, addColumn } = useBoardStore();

  const onSubmit = async (data: any) => {
    if (currentBoard) {
      const newColumn: ColumnType = {
        id: Number(new Date()),
        columnName: data.columnName,
        taskList: [],
      };

      await addColumn(newColumn);
      toggleShowInputColumn();
    }
  };

  return (
    <form
      className="h-full flex flex-col gap-3 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("columnName", {
          required: {
            value: true,
            message: "Must be Filled",
          },
        })}
        className={`p-2 w-full rounded-md outline-none capitalize ${
          theme === "light"
            ? "bg-[#e0dfdf] text-slate-800 hover:bg-slate-200"
            : "bg-[#333333] text-slate-200 hover:bg-slate-600"
        }`}
      />
      {errors.columnName && (
        <p className="text-red-500 text-sm">
          {" "}
          {String(errors.columnName?.message)}
        </p>
      )}
      <div className="flex justify-between gap-3">
        <button
          className={`px-5 py-2 w-full rounded-md font-medium transition-all ${
            theme === "light"
              ? "bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-slate-200"
              : "bg-slate-800 text-slate-200 hover:bg-slate-200 hover:text-slate-800"
          }`}
        >
          Add Column
        </button>
        <button
          type="button"
          onClick={toggleShowInputColumn}
          className="px-5 py-2 bg-red-500 rounded-md text-white hover:bg-red-400"
        >
          x
        </button>
      </div>
    </form>
  );
};

export default AddColumnInput;
