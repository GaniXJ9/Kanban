import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useBoards from "../../app/store/boards";
import BorderAll from "../../shared/icons/Notebook";
import clsx from "clsx";
import MenuLink from "./MenuLink";
import MainPageIcon from "../../shared/icons/MainPageIcon";
import MobileMenuIcon from "../../shared/icons/MobileMenuIcon";

const SideBarMenuDesktop = () => {
  const location = useLocation();
  const [expand, setExpand] = useState<boolean>(false);
  const { currentBoard, setCurrentBoard } = useBoards();

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  useEffect(() => {
    setExpand(false);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentBoard(null);
  }, []);

  return (
    <aside
      onClick={handleExpand}
      className={clsx(
        "fixed h-full lg:cursor-pointer top-0 left-0 shadow-[0_0_2px_0_rgba(0,0,0,0.5)] bg-black/10 hover:bg-black/20  backdrop-blur-sm transition-all duration-200 flex  border-r  z-50",
        expand
          ? "w-full lg:w-1/4  border-[rgba(255,255,255,0.5)]"
          : "w-10  border-[rgba(52,52,52,0.5)]",
        location.pathname === "/sign-in" && "hidden",
        location.pathname === "/registration" && "hidden",
        currentBoard && "hidden"
      )}
    >
      <p
        className={clsx(
          expand ? "text-slate-200 rotate-90" : "text-[#07437A] rotate-0",
          "absolute top-2 left-2.5 transition-all duration-200 lg:cursor-pointer dark:text-slate-200"
        )}
      >
        <MobileMenuIcon />
      </p>

      <p
        className={clsx(
          expand &&
            "bg-[#30679b] dark:bg-[#193751] border-r border-[rgba(220,218,218,0.5)]",
          "flex justify-start items-center text-nowrap  w-10"
        )}
      >
        <span
          className={clsx(
            expand ? "text-slate-200 " : "text-[#07437A]  bg-inherit",
            "block cursor-vertical-text uppercase tracking-widest  -rotate-90  w-10 text-center dark:text-slate-200"
          )}
        >
          Task Tracking
        </span>
      </p>
      <div
        className={clsx(
          "transition-all duration-200 w-full py-12 ",
          expand ? "opacity-100" : "opacity-0"
        )}
      >
        <MenuLink link={"/"} linkTitle={"Home"} Icon={MainPageIcon} />
        <MenuLink link={"/boards"} linkTitle={"Boards"} Icon={BorderAll} />
      </div>
    </aside>
  );
};

export default SideBarMenuDesktop;
