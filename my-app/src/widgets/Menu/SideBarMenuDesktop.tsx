import MenuLink from "./MenuLink";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useBoards from "../../app/store/boards";
import BorderAll from "../../shared/icons/Notebook";

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
        <MenuLink link={"/boards"} linkTitle={"Boards"} Icon={BorderAll} />
      </div>
    </aside>
  );
};

export default SideBarMenuDesktop;
