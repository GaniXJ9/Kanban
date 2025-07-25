import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useTasks from "../../app/store/tasks";
import useBoards from "../../app/store/boards";
import { yupResolver } from "@hookform/resolvers/yup";
import { task, type TaskForm } from "../../features/tasks/schema";
import type { ColumnEntity } from "../../features/types/columns/ColumnEntity";
import type { TaskEntity } from "../../features/types/tasks/TaskEntity";

const AddTaskBlock = ({
  column,
  isDragging,
}: {
  column: ColumnEntity;
  isDragging: boolean;
}) => {
  const { currentBoard } = useBoards();
  const { addTask } = useTasks();
  const [showInputTask, setShowInputTask] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(task),
  });

  useEffect(() => {
    if (isDragging && showInputTask) {
      setShowInputTask(false);
    }
  }, [isDragging]);

  const toggleInput = () => {
    setShowInputTask((prev) => !prev);
  };

  const onSubmit = async (data: TaskForm) => {
    const newTask: TaskEntity = {
      id: crypto.randomUUID(),
      ...data,
      date: Number(new Date()),
      deadline: null,
      importance: null,
      description: null,
      background: null,
      comments: [],
    };
    if (currentBoard) {
      await addTask(newTask, column, currentBoard);
      setShowInputTask(false);
      reset();
    }
  };

  return (
    <div>
      <button
        className={`w-full text-start rounded-md outline-none px-2 py-2 lg:hover:cursor-pointer transition-all duration-200
          bg-[#e0dfdf]  text-slate-800 lg:hover:bg-slate-30
          dark:bg-[#373737] dark:text-white  dark:lg:hover:bg-slate-600`}
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
            {...register("name")}
            placeholder="Enter task title..."
            className={`p-2 w-full rounded-md outline-none capitalize lg:hover:cursor-pointer bg-[#e0dfdf] text-slate-800 lg:hover:bg-slate-200 dark:bg-[#333333] dark:text-slate-200 dark:lg:hover:bg-slate-600`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {String(errors.name?.message)}
            </p>
          )}
          <div className="flex justify-between gap-3">
            <button
              type="submit"
              className={`px-5 py-2 w-full rounded-md font-medium lg:hover:cursor-pointer transition-all duration-200
                bg-slate-300 text-slate-800 lg:hover:bg-slate-800  lg:hover:text-slate-200
                dark:bg-slate-800 dark:text-slate-200 dark:lg:hover:bg-slate-200  dark:lg:hover:text-slate-800
               `}
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
