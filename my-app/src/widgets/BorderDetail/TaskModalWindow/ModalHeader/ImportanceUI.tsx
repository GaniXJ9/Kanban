import { useState, useEffect, useRef } from "react";
import useTasks from "../../../../app/store/tasks";
import useColumns from "../../../../app/store/columns";
import useBoards from "../../../../app/store/boards";

const importaceVariant = [
  { id: 1, value: "Optionaly", color: "#00ffbc" },
  { id: 2, value: "Not urgent, but necessary", color: "#ead159" },
  { id: 3, value: "Important", color: "#f44927" },
  { id: 4, value: "High Priorety", color: "#7d1999" },
];

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

const ImportanceUI = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { currentTask, setImportance } = useTasks();
  const { currentColumn } = useColumns();
  const { currentBoard } = useBoards();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelectImportance = (value: string) => {
    if (currentBoard && currentColumn && currentTask) {
      setImportance(value, currentTask, currentColumn, currentBoard);
      setShowOptions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className={`size-3 mx-2 p-2 outline-none rounded-full shadow-[0_0_0_1px_white] lg:cursor-pointer lg:hover:opacity-50 ${importanceColor(
          currentTask?.importance || null
        )}`}
        title={currentTask?.importance || "Set Importance"}
        tabIndex={0}
      ></div>

      <ul
        className={`absolute top-0 left-8 flex flex-col lg:flex-row transition-all duration-300 ${
          showOptions
            ? "gap-2 translate-x-0 opacity-100"
            : "gap-0 translate-x-full opacity-0"
        }`}
      >
        {importaceVariant.map((el) => (
          <li
            key={el.id}
            onMouseDown={() => handleSelectImportance(el.value)}
            className={`p-2 bg-[${
              el.color
            }] shadow-[0_0_0_1px_white] rounded-full lg:cursor-pointer lg:hover:opacity-50 ${
              el.value === currentTask?.importance &&
              "opacity-20 pointer-events-none"
            }`}
            title={el.value}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ImportanceUI;
