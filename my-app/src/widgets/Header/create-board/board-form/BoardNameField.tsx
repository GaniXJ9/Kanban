import type { BoardDataForm } from "../../../../features/boards/schema";
import FormField from "./FormField";
import type { UseFormRegister, FieldError } from "react-hook-form";

interface BoardNameFieldProps {
  register: UseFormRegister<BoardDataForm>;
  error?: FieldError;
}

const BoardNameField = ({ register, error }: BoardNameFieldProps) => {
  return (
    <div className="py-3">
      <FormField title="Board name" />
      <input
        className="w-full p-1 border border-slate-300 rounded-sm outline-none my-2 text-slate-600 dark:text-slate-200"
        {...register("name")}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default BoardNameField;
