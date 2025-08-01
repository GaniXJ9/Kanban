import { useLocation, useNavigate } from "react-router-dom";
import AccountBlock from "./AccountBlock/AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import DesksIcon from "../../shared/icons/DesksIcon";
import PrimaryButton from "../../shared/ui/bottons/PrimaryButton";
import { useEffect, useState } from "react";
import CreateBlock from "./InputBlock/CreateBlock";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);

  const toBoards = () => {
    navigate("/boards");
  };

  const toggleCreateBoardBlock = () => {
    setShowCreateBoardBlock((prev) => !prev);
  };

  const closeBlock = () => {
    setShowCreateBoardBlock(false);
  };

  useEffect(() => {
    setShowCreateBoardBlock(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 left-0 h-14 bg-[#6565a4] border-[#bcbcbc] dark:bg-[#1a1a1a] dark:border-[#585858] flex items-center justify-between px-3 lg:px-10  border-b z-50 
      ${location.pathname === "/auth" && "hidden"}
      `}
    >
      <div className="flex lg:hidden items-center gap-3 px-3">
        <span className="text-slate-200">
          <DesksIcon />
        </span>
      </div>
      <div
        className="lg:hover:cursor-pointer text-white items-center gap-1 hidden lg:flex"
        onClick={toBoards}
      >
        <DesksIcon />
        <span className="text-xl">Kanban</span>
      </div>
      <div className="relative h-full p-2">
        <PrimaryButton
          text="Create"
          onClick={toggleCreateBoardBlock}
          padding="px-5"
        />
      </div>
      {showCreateBoardBlock && <CreateBlock closeBlock={closeBlock} />}
      <div className="flex gap-2 items-center">
        <ToggleThemeButton />
        <AccountBlock />
      </div>
    </header>
  );
};

export default Header;
