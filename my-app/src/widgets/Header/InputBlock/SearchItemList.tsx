import clsx from "clsx";
import useTasks from "../../../app/store/tasks";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import { useEffect } from "react";
import useBoards from "../../../app/store/boards";
import DropDownElement from "./DropDownElement";
import Sad from "../../../shared/icons/Sad";

const SearchItemList = ({ focused }: { focused: boolean }) => {
  const { currentBoard } = useBoards();
  const { filteredTasks, getTasks } = useTasks();

  useEffect(() => {
    if (currentBoard) {
      getTasks(currentBoard);
    }
  }, [currentBoard]);
  return (
    <section
      className={clsx(
        focused ? "max-h-52 border" : "max-h-0  border-none",
        "absolute top-10 w-full  border-slate-500 dark:border-slate-200 rounded-md bg-slate-300 dark:bg-slate-600   overflow-hidden overflow-y-auto transition-all duration-200 "
      )}
    >
      <ul>
        {filteredTasks.length === 0 ? (
          <p className="p-5 text-slate-600 dark:text-slate-200 flex items-center justify-center text-xl">
            <span>Not found</span>
            <span>
              <Sad />
            </span>
          </p>
        ) : (
          filteredTasks.map((task: TaskEntity) => (
            <DropDownElement task={task} key={task.id} />
          ))
        )}
      </ul>
    </section>
  );
};

export default SearchItemList;
