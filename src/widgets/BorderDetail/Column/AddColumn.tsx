import { useState } from "react";
import useStore from "../../../app/store";
import AddColumnInput from "./AddColumnInput";
import AddColumnButton from "./AddColumnButton";

const AddColumn = () => {
  const [showInputColumn, setShowInputColumn] = useState<boolean>(false);
  const { theme } = useStore();

  const toggleShowInputColumn = () => {
    setShowInputColumn((prev) => !prev);
  };

  return (
    <div
      className={`w-full text-start h-fit rounded-md transition-all duration-200 ${
        theme === "light" ? "bg-[#ffffff]" : "bg-[#1a1a1a]"
      }`}
    >
      {!showInputColumn ? (
        <AddColumnButton toggleShowInputColumn={toggleShowInputColumn} />
      ) : (
        <AddColumnInput toggleShowInputColumn={toggleShowInputColumn} />
      )}
    </div>
  );
};

export default AddColumn;
