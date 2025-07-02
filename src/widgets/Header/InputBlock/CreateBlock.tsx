import { useState } from "react";
import useStore from "../../../app/store";
import DesksIcon from "../../../icons/DesksIcon";
import CreateButton from "./CreateButton";
import ArrowLeft from "../../../icons/ArrowLeft";
import CloseIcon from "../../../icons/CloseIcon";
import CreateBoardBlock from "./CreateBoard/CreateBoardBlock";

type nextStepType = "board" | "template";

function CreateBlock({ closeBlock }: { closeBlock: () => void }) {
  const [nextStepType, setNextStepType] = useState<nextStepType | null>(null);
  const { theme } = useStore();

  const showCreateBoard = () => {
    setNextStepType("board");
  };

  const showStartWithTemplate = () => {
    setNextStepType("template");
  };

  const goBack = () => {
    setNextStepType(null);
  };

  return (
    <div
      className={`absolute  top-full translate-y-4.5 -right-16  w-92   justify-center  min-h-60 rounded-md  
       
        ${
          theme === "light"
            ? "bg-white  shadow-md border-none"
            : "bg-[#242424] border border-[#585858]"
        }`}
    >
      {!nextStepType ? (
        <div className="flex flex-col py-5 ">
          <CreateButton
            onClick={showCreateBoard}
            title="Create Board"
            Icon={DesksIcon}
            subtitle="Create a board to start working on a new project. Organize tasks, assign roles, and keep everything under control."
          />
          <CreateButton
            onClick={showStartWithTemplate}
            title="Start with Template"
            Icon={DesksIcon}
            subtitle="Start with a template, a convenient basis for new boards. Make processes faster without losing quality."
          />
        </div>
      ) : (
        <div className="relative py-3 px-4">
          <span
            className={`absolute top-3 left-3 lg:hover:cursor-pointer p-1 rounded-md transition-all duration-200 ${
              theme === "light"
                ? "text-[#1a1a1a] lg:hover:bg-slate-200 lg:hover:text-white"
                : "text-slate-200 lg:hover:bg-slate-900 lg:hover:text-slate-600"
            }`}
            onClick={goBack}
          >
            <ArrowLeft />
          </span>
          <span
            className={`absolute top-3 right-3 lg:hover:cursor-pointer p-1 rounded-md transition-all duration-200 ${
              theme === "light"
                ? "text-[#1a1a1a] lg:hover:bg-slate-200 lg:hover:text-white"
                : "text-slate-200 lg:hover:bg-slate-900 lg:hover:text-slate-600"
            }`}
            onClick={closeBlock}
          >
            <CloseIcon />
          </span>
          {nextStepType === "board" ? <CreateBoardBlock /> : <> "template" </>}
        </div>
      )}
    </div>
  );
}

export default CreateBlock;
