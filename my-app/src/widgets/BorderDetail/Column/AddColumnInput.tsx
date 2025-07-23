import { useForm } from "react-hook-form";
import useStore from "../../../app/store";
import columnStoreTest from "../../../app/store/columns";
import boardStoreTEST from "../../../app/store/boards";
import { yupResolver } from "@hookform/resolvers/yup";
import { column, type ColumnForm } from "../../../features/columns/schema";

const AddColumnInput = ({
  toggleShowInputColumn,
}: {
  toggleShowInputColumn: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ColumnForm>({ resolver: yupResolver(column) });
  const { theme } = useStore();
  const { addColumn } = columnStoreTest();
  const { currentBoard } = boardStoreTEST();

  const onSubmit = async (data: ColumnForm) => {
    const newColumn = { id: crypto.randomUUID(), ...data, tasks: [] };
    if (currentBoard) addColumn(newColumn, currentBoard);
    reset();
  };

  return (
    <form
      className="h-full flex flex-col gap-3 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name", {
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
      {errors.name && (
        <p className="text-red-500 text-sm"> {String(errors.name?.message)}</p>
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
