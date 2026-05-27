import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { column, type ColumnForm } from "../../../features/columns/schema";
import DangerButton from "../../../shared/ui/buttons/DangerButton";
import CloseIcon from "../../../shared/icons/CloseIcon";
import Success from "../../../shared/ui/buttons/Success";
import ConfirmIcon from "../../../shared/icons/ConfirmIcon";
import useColumns from "../../../app/store/columns";
import useBoards from "../../../app/store/boards";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";

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
  const { addColumn } = useColumns();
  const { currentBoard } = useBoards();

  const onSubmit = async (data: ColumnForm) => {
    const newColumn: ColumnEntity = {
      id: crypto.randomUUID(),
      ...data,
      tasks: [],
    };
    if (currentBoard) addColumn(newColumn, currentBoard);
    reset();
  };

  return (
    <form
      data-testid="add-new-column-form"
      className="h-full flex flex-col gap-3 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        data-testid="form-input-id"
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
        <Success
          text="Add"
          Icon={ConfirmIcon}
          padding=" p-2"
          rounded="md"
          size="w-full"
        />

        <DangerButton
          data-testid="close-button-id"
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
