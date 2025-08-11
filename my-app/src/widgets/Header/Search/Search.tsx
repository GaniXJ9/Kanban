import { useEffect, useState, type ChangeEvent } from "react";
import SearchItemList from "./SearchItemList";
import useTasks from "../../../app/store/tasks";
import useBoards from "../../../app/store/boards";
import SearchIcon from "../../../shared/icons/SearchIcon";

const SearchBlock = () => {
  const { currentBoard } = useBoards();
  const { filterTask, getTasks } = useTasks();

  const [focused, setFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      filterTask(searchValue);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  useEffect(() => {
    if (currentBoard) {
      getTasks(currentBoard);
    }
  }, [currentBoard]);

  return (
    <div className="relative mx-5 lg:mx-0 lg:w-1/2 h-9 items-center gap-5 lg:flex">
      <div className="relative w-full block">
        <span className="absolute text-white top-2 left-2">
          <SearchIcon />
        </span>
        <input
          onInput={onInput}
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
