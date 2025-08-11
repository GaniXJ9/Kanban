import { useState } from "react";
import DesksIcon from "../../../shared/icons/DesksIcon";
import ArrowLeft from "../../../shared/icons/ArrowLeft";
import CloseIcon from "../../../shared/icons/CloseIcon";
import CreateBoardBlock from "./CreateBoard";
import ActionCard from "./ActionCard";
import SecondaryButton from "../../../shared/ui/buttons/SecondaryButton";

function CreateBlock({ closeBlock }: { closeBlock: () => void }) {
  const [showCreateBlock, setShowCreateBlock] = useState(false);

  const toggleCreateBoard = () => setShowCreateBlock((prev) => !prev);
  const hideCreateBoard = () => setShowCreateBlock(false);

  return (
    <section className="absolute top-full left-1/2 -translate-x-1/2 w-92 z-50 rounded-md bg-white shadow-md border border-slate-200 dark:border-slate-400 dark:bg-[#1f2328]">
      {!showCreateBlock ? (
        <div className="flex flex-col py-5">
          <ActionCard
            onClick={toggleCreateBoard}
            title="Create Board"
            Icon={DesksIcon}
            description="Create a board to start working on a new project. Organize tasks, assign roles, and keep everything under control."
          />
        </div>
      ) : (
        <section className="relative py-3 px-4">
          <div className="w-full flex justify-between">
            <SecondaryButton
              rounded="md"
              padding="p-2"
              Icon={ArrowLeft}
              onClick={hideCreateBoard}
            />
            <SecondaryButton
              rounded="md"
              padding="p-2"
              Icon={CloseIcon}
              onClick={closeBlock}
            />
          </div>
          <CreateBoardBlock />
        </section>
      )}
    </section>
  );
}

export default CreateBlock;
