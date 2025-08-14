import { useState, useEffect, useRef } from "react";
import useTasks from "../../../../app/store/tasks";
import useColumns from "../../../../app/store/columns";
import useBoards from "../../../../app/store/boards";
import { importanceColor } from "../../../../shared/actions/importanceColor";
import Loader from "../../../Loader";
import clsx from "clsx";

const importaceVariant = [
  { id: 1, value: "Optionaly", color: "#00ffbc" },
  { id: 2, value: "Not urgent, but necessary", color: "#ead159" },
  { id: 3, value: "Important", color: "#f44927" },
  { id: 4, value: "High Priorety", color: "#7d1999" },
];

const ImportanceUI = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { currentTask, taskLoadId, setImportance } = useTasks();
  const { currentColumn } = useColumns();
  const { currentBoard } = useBoards();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelectImportance = (value: string) => {
    if (currentBoard && currentColumn && currentTask) {
      setImportance(value, currentTask, currentColumn, currentBoard);
      setShowOptions(false);
    }
  };

  const toggleShowOptions = () => {
    setShowOptions((prev) => !prev);
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
      <div className="flex items-center">
        <div
          onClick={toggleShowOptions}
          className={clsx(
            importanceColor(currentTask?.importance || null),
            "size-3 mx-2 p-2 outline-none rounded-full transition-shadow shadow-[0_0_8px_3px_rgba(255,255,255,0.4)] duration-300  lg:cursor-pointer lg:hover:opacity-50shadow-[0_0_0_1px_white]"
          )}
          //       className={`size-3 mx-2 p-2 outline-none rounded-full transition-shadow duration-300  lg:cursor-pointer lg:hover:opacity-50
          // shadow-[0_0_0_1px_white]
          // ${importanceColor(currentTask?.importance || null)}
          // ${"shadow-[0_0_8px_3px_rgba(255,255,255,0.4)]"}`}
          title={currentTask?.importance || "Set Importance"}
          tabIndex={0}
        >
          {taskLoadId && <Loader size={20} text=" " />}
        </div>
      </div>
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
            // className={`p-2
            //   bg-[${
            //     el.color
            //   }] shadow-[0_0_8px_3px_rgba(255,255,255,0.4)] rounded-full lg:cursor-pointer lg:hover:opacity-50 ${
            //   el.value === currentTask?.importance &&
            //   "opacity-20 pointer-events-none"
            // }`}

            className={clsx(
              "p-2  rounded-full lg:cursor-pointer lg:hover:opacity-50",
              `bg-[${el.color}]`,
              `shadow-[0_0_8px_3px_${el.color}]`,
              el.value === currentTask?.importance &&
                "opacity-20 pointer-events-none"
            )}
            title={el.value}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ImportanceUI;
