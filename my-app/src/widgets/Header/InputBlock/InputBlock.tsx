import { useEffect, useState } from "react";
import useStore from "../../../app/store";
import CreateBlock from "./CreateBlock";
import Search from "../../../shared/icons/SearchIcon";
import { useLocation } from "react-router-dom";

const InputBlock = () => {
  const location = useLocation();
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);
  const { theme } = useStore();

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
    <div className="relative w-1/2 h-9  items-center gap-5 flex">
      <div className="relative w-full  hidden lg:block">
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
        className={`text-white border text-center px-5 mx-auto h-full rounded-md lg:hover:cursor-pointer transition-all duration-200 ${
          theme === "light"
            ? "border-white bg-gray-500  lg:hover:bg-slate-500"
            : "border-[#838383]  bg-blue-950 lg:hover:bg-slate-500"
        }`}
      >
        Create
      </button>

      {showCreateBoardBlock && <CreateBlock closeBlock={closeBlock} />}
    </div>
  );
};

export default InputBlock;
