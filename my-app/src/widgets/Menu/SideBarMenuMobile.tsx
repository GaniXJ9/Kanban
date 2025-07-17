import { useEffect, useState } from "react";
import MobileMenuIcon from "../../shared/icons/MobileMenuIcon";
import { useLocation } from "react-router-dom";
import MenuLink from "./MenuLink";
import DesksIcon from "../../shared/icons/DesksIcon";
import TemplateIcon from "../../shared/icons/TemplateIcon";
import MainPageIcon from "../../shared/icons/MainPageIcon";

const SideBarMenuMobile = () => {
  const location = useLocation();
  const [show, setShow] = useState<boolean>(false);
  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);
  return (
    <aside
      className={`absolute top-0 left-0 flex lg:hidden bg-white z-50 min-h-screen transition-all duration-200 
        ${show ? "w-full" : "w-0"}`}
    >
      <button
        onClick={toggleMenu}
        className={`absolute top-3  left-3 p-2 rounded-md h-fit transition-all duration-200 ${
          show
            ? "rotate-90 bg-slate-600 text-slate-200"
            : "rotate-0 bg-slate-200 text-slate-500"
        }`}
      >
        <MobileMenuIcon />
      </button>

      <div
        className={`flex flex-col items-center  py-5 overflow-hidden ${
          show ? "w-full " : "w-0"
        }`}
      >
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

export default SideBarMenuMobile;
