import { useState } from "react";
import AddNewColumn from "./AddNewColumn";
import SecondaryButton from "../../../shared/ui/buttons/SecondaryButton";

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
        <SecondaryButton
          text="+ Add Column"
          size="size-full "
          onClick={toggleShowInputColumn}
          padding="p-3"
          rounded="md"
        />
      ) : (
        <AddNewColumn toggleShowInputColumn={toggleShowInputColumn} />
      )}
    </div>
  );
};

export default AddColumn;
