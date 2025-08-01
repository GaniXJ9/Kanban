import { useEffect, useState, type ChangeEvent } from "react";
import CreateBlock from "./CreateBlock";
import Search from "../../../shared/icons/SearchIcon";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../../shared/ui/bottons/PrimaryButton";
import SearchItemList from "./SearchItemList";
import useTasks from "../../../app/store/tasks";
import useBoards from "../../../app/store/boards";

const SearchBlock = () => {
  const { currentBoard } = useBoards();
  const { tasks, filterTask, getTasks } = useTasks();
  const location = useLocation();
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };
  const toggleCreateBoardBlock = () => {
    setShowCreateBoardBlock((prev) => !prev);
  };

  const closeBlock = () => {
    setShowCreateBoardBlock(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    filterTask(e.target.value, tasks);
  };

  const onInput = () => {};

  useEffect(() => {
    setShowCreateBoardBlock(false);
  }, [location.pathname]);

  useEffect(() => {
    if (currentBoard) {
      getTasks(currentBoard);
    }
  }, [currentBoard]);

  return (
    <div className="relative w-1/2 h-9 items-center gap-5 flex">
      <div className="relative w-full  hidden lg:block">
        <span className="absolute text-white top-2 left-2">
          <Search />
        </span>
        <input
          onInput={onInput}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type="text"
          placeholder="Search"
          className={`border w-full  text-white p-1 px-8 rounded-md lg:hover:cursor-pointer outline-none border-white dark:border-[#838383]`}
        />
      </div>

      <SearchItemList focused={focused} />

      <PrimaryButton
        text="Create"
        onClick={toggleCreateBoardBlock}
        padding="px-5"
      />

      {showCreateBoardBlock && <CreateBlock closeBlock={closeBlock} />}
    </div>
  );
};

export default SearchBlock;
