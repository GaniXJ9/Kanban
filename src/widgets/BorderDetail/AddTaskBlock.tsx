import { useState } from "react";
import useTheme from "../../shared/use-hook/useTheme";

const AddTaskBlock = () => {
  const [showInputTask, setShowInputTask] = useState<boolean>(false);
  const { theme } = useTheme();

  const toggleInput = () => {
    setShowInputTask((prev) => !prev);
  };

  return (
    <div className="">
      {!showInputTask && (
        <button
          className={`w-full text-start  rounded-md outline-none px-2 py-2 lg:hover:cursor-pointer transition-all duration-200 ${
            theme === "light"
              ? "bg-[#e0dfdf]  text-slate-800 lg:hover:bg-slate-300"
              : "bg-[#373737] text-white  lg:hover:bg-slate-600"
          }`}
          onClick={toggleInput}
        >
          + Add Task
        </button>
      )}

      {showInputTask && (
        <div className="h-full  flex flex-col gap-3">
          <textarea
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
              Add Card
            </button>
            <button
              className="px-5 py-2 w-fit  transition-all duration-200 bg-red-500 rounded-md text-lg font-medium text-white lg:hover:cursor-pointer lg:hover:bg-red-400"
              onClick={toggleInput}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskBlock;
