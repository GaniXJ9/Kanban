import MenuLink from "./MenuLink";
import DesksIcon from "../../icons/DesksIcon";
import TemplateIcon from "../../icons/TemplateIcon";
import MainPageIcon from "../../icons/MainPageIcon";

function SideBarMenu() {
  return (
    <aside className="w-1/4 flex flex-col ">
      <div className="flex flex-col py-5 ">
        <MenuLink link={"/desks"} linkTitle={"Desks"} Icon={DesksIcon} />
        <MenuLink
          link={"/templates"}
          linkTitle={"Templates"}
          Icon={TemplateIcon}
        />
        <MenuLink link={"/"} linkTitle={"Main"} Icon={MainPageIcon} />
      </div>
    </aside>
  );
}

export default SideBarMenu;
