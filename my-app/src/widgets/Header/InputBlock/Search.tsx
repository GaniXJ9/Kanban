import { useEffect, useState, type ChangeEvent } from "react";
import Search from "../../../shared/icons/SearchIcon";
import SearchItemList from "./SearchItemList";
import useTasks from "../../../app/store/tasks";
import useBoards from "../../../app/store/boards";

const SearchBlock = () => {
  const { currentBoard } = useBoards();
  const { filterTask, getTasks } = useTasks();
  const [focused, setFocused] = useState<boolean>(false);

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    filterTask(e.target.value);
  };

  useEffect(() => {
    if (currentBoard) {
      getTasks(currentBoard);
    }
  }, [currentBoard]);

  return (
    <div className="relative w-1/2 h-9 items-center gap-5 flex">
      <div className="relative w-full  block">
        <span className="absolute text-white top-2 left-2">
          <Search />
        </span>
        <input
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type="text"
          placeholder="Search"
          className={`border w-full bg-slate-600/50 text-white p-1 px-8 rounded-md lg:hover:cursor-pointer outline-none border-white dark:border-[#838383]`}
        />
      </div>

      <SearchItemList focused={focused} />
    </div>
  );
};

export default SearchBlock;
