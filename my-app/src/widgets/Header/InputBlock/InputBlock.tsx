import { useEffect, useState } from "react";
import CreateBlock from "./CreateBlock";
import Search from "../../../shared/icons/SearchIcon";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../../shared/ui/bottons/PrimaryButton";

const InputBlock = () => {
  const location = useLocation();
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);

  const toggleCreateBoardBlock = () => {
    setShowCreateBoardBlock((prev) => !prev);
  };

  const closeBlock = () => {
    setShowCreateBoardBlock(false);
  };

  useEffect(() => {
    setShowCreateBoardBlock(false);
  }, [location.pathname]);

  return (
    <div className="relative w-1/2 h-9 items-center gap-5 flex">
      <div className="relative w-full  hidden lg:block">
        <span className="absolute text-white top-2 left-2">
          <Search />
        </span>
        <input
          type="text"
          placeholder="Search"
          className={`border w-full  text-white p-1 px-8 rounded-md lg:hover:cursor-pointer outline-none border-white dark:border-[#838383]`}
        />
      </div>

      <PrimaryButton
        text="Create"
        onClick={toggleCreateBoardBlock}
        padding="px-5"
      />

      {showCreateBoardBlock && <CreateBlock closeBlock={closeBlock} />}
    </div>
  );
};

export default InputBlock;
