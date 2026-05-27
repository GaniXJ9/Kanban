import { useState } from "react";
import AddNewColumn from "./add-new-column";
import SecondaryButton from "../../../shared/ui/buttons/secondary-button";

const AddColumn = () => {
  const [showInputColumn, setShowInputColumn] = useState<boolean>(false);

  const toggleShowInputColumn = () => {
    setShowInputColumn((prev) => !prev);
  };

  return (
    <div
      className={`text-start h-fit rounded-md transition-all duration-200 bg-[#ffffff] dark:bg-[#1a1a1a]`}
    >
      {!showInputColumn ? (
        <SecondaryButton
          text="+ Add Column"
          size="size-full "
          onClick={toggleShowInputColumn}
          padding="p-3"
          rounded="md"
          data-testid="add-column-btn"
        />
      ) : (
        <AddNewColumn
          toggleShowInputColumn={toggleShowInputColumn}
          data-testid="column-inp-block"
        />
      )}
    </div>
  );
};

export default AddColumn;
