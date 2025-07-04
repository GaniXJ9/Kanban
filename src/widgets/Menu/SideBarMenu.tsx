import MenuLink from "./MenuLink";
import DesksIcon from "../../shared/icons/DesksIcon";
import TemplateIcon from "../../shared/icons/TemplateIcon";
import MainPageIcon from "../../shared/icons/MainPageIcon";
import { useLocation } from "react-router-dom";
import useStore from "../../app/store";

const SideBarMenu = () => {
  const location = useLocation();
  const { currentBoard } = useStore();

  return (
    <aside
      className={`w-1/4 flex flex-col ${
        location.pathname === "/auth" && "hidden"
      }
      ${currentBoard && "hidden"}
    
      `}
    >
      <div className="flex flex-col py-5 ">
        <MenuLink link={"/boards"} linkTitle={"Boards"} Icon={DesksIcon} />
        <MenuLink
          link={"/templates"}
          linkTitle={"Templates"}
          Icon={TemplateIcon}
        />
        <MenuLink link={"/"} linkTitle={"Main"} Icon={MainPageIcon} />
      </div>
    </aside>
  );
};

export default SideBarMenu;
