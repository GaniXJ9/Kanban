import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useStore from "../../app/store";
import useBoardStore from "../../app/store/board/boardStore";
import type { Id } from "../../shared/type/IdType";

const AddTaskBlock = ({ id, isDragging }: { id: Id; isDragging: boolean }) => {
  const { theme } = useStore();
  const { currentBoard, addTask } = useBoardStore();
  const [showInputTask, setShowInputTask] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isDragging && showInputTask) {
      setShowInputTask(false);
    }
  }, [isDragging]);

  const toggleInput = () => {
    setShowInputTask((prev) => !prev);
  };

  const onSubmit = async (data: any) => {
    if (currentBoard) {
      await addTask(data.taskTitle, currentBoard, id);
      setShowInputTask(false);
      reset();
    }
  };

  return (
    <div>
      <button
        className={`w-full text-start rounded-md outline-none px-2 py-2 lg:hover:cursor-pointer transition-all duration-200 ${
          theme === "light"
            ? "bg-[#e0dfdf]  text-slate-800 lg:hover:bg-slate-300"
            : "bg-[#373737] text-white  lg:hover:bg-slate-600"
        }`}
        onClick={toggleInput}
        disabled={isDragging}
      >
        + Add Task
      </button>

      {showInputTask && !isDragging && (
        <form
          className="h-full flex flex-col gap-3 mt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register("taskTitle", {
              required: {
                value: true,
                message: "Must be filled",
              },
            })}
            placeholder="Enter task title..."
            className={`p-2 w-full rounded-md outline-none capitalize lg:hover:cursor-pointer ${
              theme === "light"
                ? "bg-[#e0dfdf] text-slate-800 lg:hover:bg-slate-200"
                : "bg-[#333333] text-slate-200 lg:hover:bg-slate-600"
            }`}
          />
          {errors.taskTitle && (
            <p className="text-red-500 text-sm">
              {String(errors.taskTitle?.message)}
            </p>
          )}
          <div className="flex justify-between gap-3">
            <button
              type="submit"
              className={`px-5 py-2 w-full rounded-md font-medium lg:hover:cursor-pointer transition-all duration-200 ${
                theme === "light"
                  ? "bg-slate-300 text-slate-800 lg:hover:bg-slate-800  lg:hover:text-slate-200"
                  : "bg-slate-800 text-slate-200 lg:hover:bg-slate-200  lg:hover:text-slate-800"
              }`}
            >
              Add Card
            </button>
            <button
              type="button"
              className="px-5 py-2 w-fit transition-all duration-200 bg-red-500 rounded-md text-lg font-medium text-white lg:hover:cursor-pointer lg:hover:bg-red-400"
              onClick={toggleInput}
            >
              x
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTaskBlock;
