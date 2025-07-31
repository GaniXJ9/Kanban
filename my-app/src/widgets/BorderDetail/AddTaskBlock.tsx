import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useTasks from "../../app/store/tasks";
import useBoards from "../../app/store/boards";
import { yupResolver } from "@hookform/resolvers/yup";
import { task, type TaskForm } from "../../features/tasks/schema";
import type { ColumnEntity } from "../../features/types/columns/ColumnEntity";
import type { TaskEntity } from "../../features/types/tasks/TaskEntity";
import SecondaryButton from "../../shared/ui/bottons/SecondaryButton";
import Success from "../../shared/ui/bottons/Success";
import ConfirmIcon from "../../shared/icons/ConfirmIcon";
import DangerButton from "../../shared/ui/bottons/DangerButton";
import CloseIcon from "../../shared/icons/CloseIcon";
// import SecondaryButton from "../../shared/ui/bottons/SecondaryButton";

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
      <SecondaryButton
        size="w-full"
        rounded="md"
        onClick={toggleInput}
        text="+ Add Task"
        padding="px-2 py-2"
      />

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
            <Success
              Icon={ConfirmIcon}
              fontSize="md"
              size="w-full"
              rounded="md"
              text="Add"
              padding="px-2 py-2"
            />

            <DangerButton
              onClick={toggleInput}
              Icon={CloseIcon}
              padding="px-3 py-2"
              rounded="md"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTaskBlock;
