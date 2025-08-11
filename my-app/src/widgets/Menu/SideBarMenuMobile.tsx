import { useEffect, useState } from "react";
import clsx from "clsx";
import MobileMenuIcon from "../../shared/icons/MobileMenuIcon";
import { useLocation } from "react-router-dom";
import MenuLink from "./MenuLink";
import DesksIcon from "../../shared/icons/DesksIcon";

const SideBarMenuMobile = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow((prev) => !prev);

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 flex lg:hidden shadow z-50 min-h-screen transition-all duration-200 bg-white dark:bg-[#252525]",
        show ? "w-1/2" : "w-0"
      )}
    >
      <button
        onClick={toggleMenu}
        className={clsx(
          "fixed top-3 left-3 p-2 rounded-md h-fit transition-all duration-200 bg-slate-200 text-slate-600 dark:bg-slate-600 dark:text-slate-200",
          show ? "rotate-90" : "rotate-0"
        )}
      >
        <MobileMenuIcon />
      </button>

      <div
        className={clsx(
          "flex flex-col items-center py-5 overflow-hidden",
          show ? "w-full" : "w-0"
        )}
      >
        <MenuLink link="/boards" linkTitle="Boards" Icon={DesksIcon} />
      </div>
    </aside>
  );
};

export default SideBarMenuMobile;
