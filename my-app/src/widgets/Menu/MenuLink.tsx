import type { SVGProps } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../app/store";

const MenuLink = ({
  link,
  linkTitle,
  Icon,
}: {
  link: string;
  linkTitle: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}) => {
  const { theme } = useStore();

  return (
    <NavLink
      to={link}
      className={`text-2xl w-1/2  lg:w-full  lg:text-lg lg:font-normal  flex  justify-between lg:justify-start gap-3 p-2 rounded-md items-center transition-all duration-200 ${
        theme === "light"
          ? "lg:hover:bg-[#6565a4] text-slate-500 lg:hover:text-white"
          : "lg:hover:bg-slate-200 text-[#cbc9c9] lg:hover:text-[#1a1a1a]"
      } `}
    >
      <span className="hidden lg:block">
        <Icon />
      </span>
      <span> {linkTitle}</span>
    </NavLink>
  );
};

export default MenuLink;
