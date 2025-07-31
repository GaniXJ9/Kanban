import MenuLink from "./MenuLink";
import DesksIcon from "../../shared/icons/DesksIcon";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useBoards from "../../app/store/boards";

const SideBarMenuDesktop = () => {
  const location = useLocation();
  const { currentBoard, setCurrentBoard } = useBoards();

  useEffect(() => {
    setCurrentBoard(null);
  }, []);

  return (
    <aside
      className={`w-1/4 hidden lg:flex flex-col ${
        location.pathname === "/auth" && "hidden"
      }
      ${currentBoard && "hidden"}`}
    >
      <div className="flex flex-col py-5 ">
        <MenuLink link={"/boards"} linkTitle={"Boards"} Icon={DesksIcon} />
      </div>
    </aside>
  );
};

export default SideBarMenuDesktop;
