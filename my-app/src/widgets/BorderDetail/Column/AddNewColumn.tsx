import { useForm } from "react-hook-form";
import columnStoreTest from "../../../app/store/columns";
import boardStoreTEST from "../../../app/store/boards";
import { yupResolver } from "@hookform/resolvers/yup";
import { column, type ColumnForm } from "../../../features/columns/schema";
import DangerButton from "../../../shared/ui/bottons/DangerButton";
import CloseIcon from "../../../shared/icons/CloseIcon";
import SecondaryButton from "../../../shared/ui/bottons/SecondaryButton";

const AddNewColumn = ({
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
        placeholder="Column Name"
        {...register("name", {
          required: {
            value: true,
            message: "Must be Filled",
          },
        })}
        className={`p-2 w-full rounded-md outline-none capitalize bg-[#e0dfdf] text-slate-800 hover:bg-slate-200 dark:bg-[#333333] dark:text-slate-200 dark:hover:bg-slate-600`}
      />
      {errors.name && (
        <p className="text-red-500 text-sm"> {String(errors.name?.message)}</p>
      )}
      <div className="flex justify-between gap-3">
        <SecondaryButton
          text="Add Column"
          padding=" p-2"
          rounded="md"
          size="w-full"
        />
        <DangerButton
          Icon={CloseIcon}
          padding="p-3"
          rounded="md"
          onClick={toggleShowInputColumn}
        />
      </div>
    </form>
  );
};

export default AddNewColumn;
