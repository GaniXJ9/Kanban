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
      className={` w-full flex justify-between lg:justify-start gap-3 p-2 lg:px-10 items-center transition-all duration-200  
        text-gray-600 lg:hover:text-[#07437A]
dark:lg:hover:bg-slate-200`}
    >
      <span className="hidden lg:block text-sm">
        <Icon />
      </span>
      <span className=" text-lg dark:text-[#cbc9c9] dark:lg:hover:text-[#1a1a1a] uppercase ">
        {" "}
        {linkTitle}
      </span>
    </NavLink>
  );
};

export default MenuLink;
