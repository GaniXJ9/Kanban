import { useState } from "react";
import useTasks from "../../../app/store/tasks";

const importaceVariant = [
  { id: 1, value: "Optionaly" },
  { id: 2, value: "Not urgent, but necessary" },
  { id: 3, value: "Important" },
  { id: 4, value: "High Priorety" },
];

const ImportanceUI = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { currentTask } = useTasks();

  const importanceColor = (importance: string | null) => {
    switch (importance) {
      case "Optionaly":
        return "bg-[#00ffbc]";
      case "Not urgent, but necessary":
        return "bg-[#ead159]";
      case "Important":
        return "bg-[#f44927]";
      case "High Priorety":
        return "bg-[#7d1999]";
      default:
        return "bg-[#c5c5c5]";
    }
  };

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <>
      <span
        onClick={toggleOptions}
        className={`relative mx-2 p-2 rounded-full shadow-[0_0_0_1px_white]  ${importanceColor(
          null
        )}`}
        title={currentTask?.importance || "Set Importance"}
      >
        <div
          className={`absolute -top-2 left-5 flex flex-row gap-5 bg-gray-300 overflow-hidden  rounded-lg border-slate-600  transition-all  duration-200 ${
            showOptions ? "w-0  border-none" : "w-fit "
          }`}
        >
          {importaceVariant.map((el) => (
            <span
              key={el.id}
              className={`${importanceColor(
                el.value
              )} rounded-full ring-2 ring-blue-100 p-2 w-fit`}
              title={el.value}
            ></span>
          ))}
        </div>
      </span>
    </>
  );
};

export default ImportanceUI;
