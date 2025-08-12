import type { SVGProps } from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({
  link,
  linkTitle,
  Icon,
}: {
  link: string;
  linkTitle: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}) => {
  return (
    <NavLink
      to={link}
      className={`text-xl w-1/2 lg:w-full lg:text-sm lg:font-medium flex justify-between lg:justify-start gap-3 p-2 items-center transition-all duration-200 lg:hover:bg-[#6565a4] text-slate-500 lg:hover:text-white
dark:lg:hover:bg-slate-200`}
    >
      <span className="hidden lg:block text-sm">
        <Icon />
      </span>
      <span className=" dark:text-[#cbc9c9] dark:lg:hover:text-[#1a1a1a]">
        {" "}
        {linkTitle}
      </span>
    </NavLink>
  );
};

export default MenuLink;
