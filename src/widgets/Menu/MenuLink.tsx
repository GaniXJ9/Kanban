import type { SVGProps } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../app/store";

function MenuLink({
  link,
  linkTitle,
  Icon,
}: {
  link: string;
  linkTitle: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}) {
  const { theme } = useStore();

  return (
    <NavLink
      to={link}
      className={`text-lg font-normal flex gap-3 p-2 rounded-md items-center w-full transition-all duration-200 ${
        theme === "light"
          ? "lg:hover:bg-[#6565a4] text-slate-500 lg:hover:text-white"
          : "lg:hover:bg-slate-200 text-[#cbc9c9] lg:hover:text-[#1a1a1a]"
      } `}
    >
      <Icon /> {linkTitle}
    </NavLink>
  );
}

export default MenuLink;
