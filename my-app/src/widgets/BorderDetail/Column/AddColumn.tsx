import { useState } from "react";
import AddColumnInput from "./AddColumnInput";
import AddColumnButton from "./AddColumnButton";

const AddColumn = () => {
  const [showInputColumn, setShowInputColumn] = useState<boolean>(false);

  const toggleShowInputColumn = () => {
    setShowInputColumn((prev) => !prev);
  };

  return (
    <div
      className={`w-full text-start h-fit rounded-md transition-all duration-200 bg-[#ffffff] dark:bg-[#1a1a1a]`}
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
