import { useState } from "react";
import useStore from "../../../app/store";
import CreateBlock from "./CreateBlock";
import Search from "../../../shared/icons/SearchIcon";

const InputBlock = () => {
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);
  const { theme } = useStore();

  const toggleCreateBoardBlock = () => {
    setShowCreateBoardBlock((prev) => !prev);
  };

  const closeBlock = () => {
    setShowCreateBoardBlock(false);
  };

  return (
    <div className="relative w-1/2 h-9  items-center gap-5 hidden lg:flex">
      <div className="relative w-full">
        <span className="absolute text-white top-2 left-2">
          <Search />
        </span>
        <input
          type="text"
          placeholder="Search"
          className={`border w-full  text-white p-1 px-8 rounded-md lg:hover:cursor-pointer outline-none ${
            theme === "light" ? "border-white " : "border-[#838383] "
          }`}
        />
      </div>
      <button
        onClick={toggleCreateBoardBlock}
        className={`text-white border  px-5 h-full rounded-md lg:hover:cursor-pointer ${
          theme === "light"
            ? "border-white bg-gray-500 "
            : "border-[#838383]  bg-blue-950"
        }`}
      >
        Create
      </button>
      {showCreateBoardBlock && <CreateBlock closeBlock={closeBlock} />}
    </div>
  );
};

export default InputBlock;
