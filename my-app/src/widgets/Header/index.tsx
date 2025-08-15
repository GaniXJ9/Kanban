import { useLocation, useNavigate } from "react-router-dom";
import AccountBlock from "./AccountBlock/AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import DesksIcon from "../../shared/icons/DesksIcon";
// import PrimaryButton from "../../shared/ui/buttons/PrimaryButton";
import { useEffect, useState } from "react";
import CreateBlock from "./CreateBoard/CreateBlock";
import clsx from "clsx";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCreateBoardBlock, setShowCreateBoardBlock] =
    useState<boolean>(false);

  const toBoards = () => {
    navigate("/boards");
  };

  // const toggleCreateBoardBlock = () => {
  //   setShowCreateBoardBlock((prev) => !prev);
  // };

  const closeBlock = () => {
    setShowCreateBoardBlock(false);
  };

  useEffect(() => {
    setShowCreateBoardBlock(false);
  }, [location.pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full  backdrop-blur-md dark:bg-[rgba(29,33,37,0.5)] border-[#5c5c5c] dark:border-[#282c30] dark:from-[rgba(29,33,37)] dark:to-[rgba(29,33,37)] flex items-center justify-between px-3 lg:px-14  border-b z-50",
        location.pathname === "/sign-in" && "hidden",
        location.pathname === "/registration" && "hidden"
      )}
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
        <span className="p-2  bg-[#07437A] rounded-md text-white">
          <DesksIcon />
        </span>
        <span className="text-xl text-[#07437A] dark:text-slate-200 uppercase font-sans">
          Kanban
        </span>
      </div>
      {/* <div className="relative h-full p-2 ">
        <PrimaryButton
          text="Create"
          onClick={toggleCreateBoardBlock}
          padding="px-5 py-1"
        />
      </div> */}
      {showCreateBoardBlock && <CreateBlock closeBlock={closeBlock} />}
      <div className="flex gap-2 items-center ">
        <ToggleThemeButton />
        <AccountBlock />
      </div>
    </header>
  );
};

export default Header;
