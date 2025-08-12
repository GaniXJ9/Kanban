import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useBoards from "../../app/store/boards";
import BorderAll from "../../shared/icons/Notebook";
import clsx from "clsx";
import MenuLink from "./MenuLink";
import MainPageIcon from "../../shared/icons/MainPageIcon";

const SideBarMenuDesktop = () => {
  const location = useLocation();
  const { currentBoard, setCurrentBoard } = useBoards();

  useEffect(() => {
    setCurrentBoard(null);
  }, []);

  return (
    <aside
      className={clsx(
        " w-1/5 hidden lg:flex flex-col pt-5",
        location.pathname === "/sign-in" && "hidden",
        location.pathname === "/registration" && "hidden",
        currentBoard && "hidden"
      )}
    >
      <div className="flex flex-col py-5 gap-2">
        <MenuLink link={"/"} linkTitle={"Home"} Icon={MainPageIcon} />
        <MenuLink link={"/boards"} linkTitle={"Boards"} Icon={BorderAll} />
      </div>
    </aside>
  );
};

export default SideBarMenuDesktop;
