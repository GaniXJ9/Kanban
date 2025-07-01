import { useState } from "react";
import useStore from "../../../app/store";
import CreateBorderBlock from "./CreateBorderBlock";

function InputBlock() {
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);
  const { theme } = useStore();

  const toggleCreateBoardBlock = () => {
    setShowCreateBoardBlock((prev) => !prev);
  };
  return (
    <div className="relative w-1/2 h-9 flex items-center gap-5 ">
      <input
        type="text"
        className={`border w-full h-full text-white px-5 rounded-md lg:hover:cursor-pointer ${
          theme === "light" ? "border-white " : "border-[#838383] "
        }`}
      />
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
      <CreateBorderBlock showCreateBoardBlock={showCreateBoardBlock} />
    </div>
  );
}

export default InputBlock;
