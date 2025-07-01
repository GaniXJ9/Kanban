import { useState } from "react";
import useStore from "../../../app/store";
import DesksIcon from "../../../icons/DesksIcon";
import CreateButton from "./CreateButton";
import ArrowLeft from "../../../icons/ArrowLeft";

type nextStepType = "board" | "template";

function CreateBorderBlock({
  showCreateBoardBlock,
}: {
  showCreateBoardBlock: boolean;
}) {
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
      className={`absolute  top-full translate-y-4.5 -right-16 min-w-60 max-w-92  justify-center  min-h-60 rounded-md  
        ${showCreateBoardBlock ? "hidden" : "block "}
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
        <div className="relative py-10">
          <span
            className="absolute top-3 left-1 lg:hover:cursor-pointer"
            onClick={goBack}
          >
            <ArrowLeft />
          </span>
          {nextStepType === "board" ? <> "board" </> : <> "template" </>}
        </div>
      )}
    </div>
  );
}

export default CreateBorderBlock;
